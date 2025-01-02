const express = require('express');
const { userAuth } = require('../middleware/auth');
const ConnectionRequestModel = require('../models/connectionRequest');
const User = require('../models/user');
const userRouter = express.Router();


const USER_SAFE_DATA = "firstName lastName photoUrl age gender about skills";

// Get all the pending connection request for the loggedInUser
userRouter.get("/user/request/received", userAuth, async(req,res)=>{
    try {
        const loggedInUser = req.user

        const connectionRequest = await ConnectionRequestModel.find({
            toUserId : loggedInUser._id,
            status : "interested"
        }).populate("fromUserId", "firstName lastName");
        // }).populate("fromUserId",["firstName", "lastName"]);

        res.json({
            message : "data fetched successfully",
            data : connectionRequest
        })
    } catch (error) {
        res.status(400).send("Error : "+error.message);
    }
})

userRouter.get("/user/connections",userAuth, async(req,res)=>{
    try {
        const loggedInUser = req.user;
        

        const connectionRequests = await ConnectionRequestModel.find({
            $or: [
              { toUserId: loggedInUser._id, status: "accepted" },
              { fromUserId: loggedInUser._id, status: "accepted" },
            ],
          })
            .populate("fromUserId", USER_SAFE_DATA)
            .populate("toUserId", USER_SAFE_DATA);
        console.log('hii');


        const data = connectionRequests.map((row)=>{
            if(row.fromUserId.toString() === loggedInUser._id.toString()){
                return row.toUserId;
            }
            return row.fromUserId;
        })

        res.json({
            data
        })

    } catch (error) {
        res.status(400).send("Error " + error.message);
    }
})

userRouter.get("/feed", userAuth, async(req,res)=>{
    try {
        const loggedInUser = req.user;

        const page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 10;
        limit = limit > 50 ? 50 : limit;
        const skip = (page-1) * limit;

        const connectionRequest = await ConnectionRequestModel.find({
            $or:[{fromUserId : loggedInUser._id},{toUserId : loggedInUser._id}]
        }).select("fromUserId toUserId");

        const hideUsersFromFeed = new Set();
        connectionRequest.forEach((req)=>{
            hideUsersFromFeed.add(req.fromUserId.toString());
            hideUsersFromFeed.add(req.toUserId.toString());
        })

        const users = await User.find({
            $and : [
                {_id : {$nin : Array.from(hideUsersFromFeed)}},
                {_id : {$ne : loggedInUser._id}}
            ]
        }).select(USER_SAFE_DATA)
        .skip(skip)
        .limit(limit)

        res.json({data : users});

    } catch (error) {
        res.status(400).json({Error:"Error"+ error.message})
    }
})

module.exports = userRouter;