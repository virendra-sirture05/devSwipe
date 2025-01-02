- create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Intall express
- create a server
- Listen to port 7777
- Write request handler for /test, /hello
- Intall nodemon and update scripts inside package.json
- what are dependencies
- what is the use -g while npm intall
- Difference between caret and tilde (^ vs ~)



- Initialize git
- .gitignore
- create a remote repo on github
- push all code to remote origin
- play with routes and routes extension ex. /hello, /, /hello/z, /xyz
- Order of routes matter a lot
- Install postman app and make a workspace/collection > test api call
- Write a logic to handle Get, Post, Patch, delete API calls and test them on postman

- Explore routing and use of ?, + , (), * in the routes
- use of regex in the routes /a/ , /.*fly$/
- Reading the query params in the routes 
- Reading the dynamic routes


- Multiple route handlers - play with the code
- next()
- next function and errors along with the res.send()
- app.use('/use',rH, [rh2,rh3],rh4,rg5)
- What is middleWare? why do we need it/
- How express js basically handles request behind the scenes
- Difference between app.use vs app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except user/login
- Error handling using app.use("/",(err,req,res,next)=>{})


- create a free cluster on mongodb official website(mongo atlas)
- Install mongoose library
- connect your application to the Database "connection-url"/devTinder
- call the connection function and connect to database before starting applicatino on 3000
- create userSchema and userModel
- create Post /signup API to add data to database
- push some documents using api calls from postman
- Error handling using try catch


- JS object vs JSON (Difference)
- Add the express.json middleware to your app
- Make your signup api dynamic to receive data from the end user (postman)
- user.findOne with dublicate emial ids, which object returned
- API - get user by email
- API - feed api- GET/feed - get all teh user from the database
- Api - get user by id
- create delete user api
- Difference between patch and put
- API -updata a user
- Explore the mongoose documentation for model methods
- what are options in a Model.findOneAndUpdate method, explore more about it
- APi update the user with email id


- Explore schematype options from the documentation
- add required, unique, lowercase, min, minLength, trim
- add default 
- create a custom validate function for gender
- Improve the DB schema - Put all appropriate validations on each field in schema
- Add timestamps to the userSchema
- Add api level validation on patch request & signup post api
- Data sanitizing - Add api validation for each field
- Install validator
- Explore validator library function and use validator func for pass, photourl, email
- Never trust req.body


- Validate data in signup API
- Install bcrypt package
- Create PasswordHash using bcrypt.hash & save the user is excrupted password.
- create login API
- compare password and throw errors if email or password is invalid


- Install cookie-parser
- just send a dummy cookie to user
- create GET/profle Api and check if you get the cookie back
- install jsonwebtoken
- In login api, after email and password validation, create a jwt token and send it to user in cookies
- read the cookies inside your profile API and find the logged in user
- useAuth middleware
- Add the userAuth middleware in profile api and a new sendConnectionRequest api
- set the expiry of jwt token and cookies to 7d
- create userSchema method to get jwt()
- create userSchema method to comparepassword(passwordInputByUser)


- Explore tinder apis
- Create a list all api you can think of in devTinder
- Group multiple routes under respective routers
- Read documentation for express.Router
- Create Route folder for managing auth, profile, request routers.
- create authRouter, profileRouter, requestRouter.
- Import these routers in app.js
- create POST/logout api
- create PATCH/profile/edit
- create PATCH/profile/password API => forgot password api
- Make your validation all data in every POST,PATCH APIs


- Create Connection Request Schema
- Send Connection Request API
- Proper validation of data
- Think about all corner cases
- $or query $and query in mongoose - https://www.mongodb.com/docs/manual/reference/operator/query-logical/
- Schema.pre("save") function
- Read more about in indexes in mongodb
- why do we need indexes in db?
- What is the advantage and disadvantage of creating?
- Read this article about indexes -https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/
- Always think about corner cases


- Write code with proper validation for POST /request/review/:status/:requestId
- Thought process - POST VS GET
- Read about ref and populate https://mongoosejs.com/docs/populate.html
- Create GET  /USER/request/recieved with all the checks
- Create GET /user/connections


- Logic for GET /feed api
- Explore the $nin, $ne, $and and other query operators
- Pagination


NOTES-


 /feed?page=1&limit=10 => 1-10 => .skip(0) & .limit(10)

 /feed?page=2&limit=10 => 11-20 => .skip(10) & .limit(10)

 /feed?page=3&limit=10 => 21=30 => .skip(20) & .limit(10)

 /feed?page=4&limit=10 => 31-40 => .skip(30) & .limit(10)

skip = (page-1)*limit