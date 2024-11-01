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