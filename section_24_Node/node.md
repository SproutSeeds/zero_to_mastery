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
