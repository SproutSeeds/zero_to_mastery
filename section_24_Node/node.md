# Node

    - It allows you to run javascript on your machine without a browser

# Node Objects

    - global
    - global.process
        What the computer is doing at this time. So many cool exposures here.
    - global.setTimeout(()=>console.log('hi),2000)
        runs console.log after 2 seconds
    - console.log(__dirname)
        returns working directory
    - module
        - module.exports ={data:data_to_be_exported}
        - (in file that requires exported data)
            - const exportedObject = require('<file location>')
            - const data = exportedObject.data;
    - Built In Modules
        - fs
            - allows you to read the file system
        - http
            - allows you to create a server

# Creating Server

    - Without Express
        - npm install nodemon --save-dev
        - In package.json, under scripts
            - add "start": "nodemon server.js"
        - npm start
            This will create your server on whatever local host you have set in your server.js
    - With Express
        - npm install express
        - npm install nodemon --save-dev
        - In package.json, under scripts
            - add "start": "nodemon server.js"
        - npm start
            This will create your server on whatever local host you have set in your server.js
        - Middleware Explanation
            - as the request comes in, it passes through it and then trickles down through thr rest of the routes.
                - app.use((req, res, next))
                    - to move onto the next express functions you must call next();

# RESTFUL API

    An architectural structure API that makes sure everything plays nicely, specifi the paramaters that define the created server.
        - GET
            - to change a resource
        - PUT
            - to update the state of a resource
        - POST
            - creates a resource
        - DELETE
            - to remove it

    - req.query
        - localhost:3000/?name=cody&age=28
            -  console.log(req.query)
                {name:cody, age:28}
    - req.headers
        - localhost:3000/
            - sending a POST request
                - console.log(req.headers)
                    - will output the header information sent with the post
    - req.params
        - localhost:3000/1234
            - sending a GET request
                - console.log(req.params)
                    - will output the params as the value with the key of whatever was defined in server.js '/:id'
    - res.status
        - res.status(404).send("not found")
            - this will send a 404 status to the network tab in your browser.
    - Serving Static files
        - This will server as middleware with express to my working directory + public static files to server
            -  app.use(express.static(__dirname + "/public"));

# File System Module

    - utf8 encoding
        - standard encoding across the web.
        - a,b,c, japanese characters, etc.
    - readfile
        - is asynchronous and will not block other actions
    - readfileSync
        - is synchronous and will block actions.
    - appendFile(<filename>, <what to append>, error callback)
        - it will append selected file or create the file if it doesnt exist
    - writeFile(<filename>, <what to write>, error callback)
        - creates a new file with content written

# Console Commands

    - console.time('<title>')
        - starts a timer
    - console.timeEnd('<same title as other one^^>')
        - ends timer
