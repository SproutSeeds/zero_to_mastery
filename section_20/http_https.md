# HTTP/HTTPS

    - Tim Berners Lee built the world wide web in 1989
    - Internet Flow:
        - Internet Backbone (physics submarine cables)
        - ISP network (century link)
        - Wireless transmitter
        - Line of sight Backhaul
        - Wireless Modem on House
        - Home local area network
    - HTTP: Hyper text transfer protocol
        - The rules or "protocol that is used over the wires"
        - Made way for the Client Server Protocol
            1. Requests initiated by the recipient (the web browser) using HTTP
            2. The server knows what the web browser is saying because it's using HTTP
            3. The server can now respond with HTML because it is always using HTTP on both ends.
        - Clients and Servers can communicate by exchanging individual messages
            - Client messages: requests
            - Server messages: responses
        - HTTP WORDS
            - GET: I want to get something from a server.
            - POST: I want to post something to a server.
            - PUT: I am going to send you some data that needs to be updated on a server.
            - DELETE: Delete something on the backend server/database.
        - HTTP SERVER RESPONSE MESSAGES: (https://www.w3schools.com/tags/ref_httpmessages.asp)
            1. Status Codes...
                - 200 OK message
                - 404 not found message
                - 500 error message
            2. HTML message
        - How to send information to a server to request specific data.
            1. query string
            2. through the body of the request
        - HTTPS
            - Hyper Text Transfer Protocol Secure
                - Now the communication is encrypted, so only the client(browser) and the server know the secret token to read the message.
                - The 'S' in HTTPS uses Transport Layer Security(TLS) Secure Sockets Layer(SSL)

# JSON

    - Sending JSON over HTTP to server
        - JSON.Stringify(object)
        - The string is sent to the server
            - The server runs JSON.parse(JSON)
        - Returns the requested data as a string.
        - we need to then JSON.parse(string-returned-from-server)

# AJAX

    - read from a web server after the page is loaded and update a page without reloading the page.
    - send data in the background while the user is interacting with the website
    - Pioneered by google in 2006.
    - Achieved using a tool developers built called XMLHTTP request
    - now we use fetch(url) in javascript to achieve the same result.

# Fetch Requests

    - fetch(url)
        - returns a Promise
            - .then(response=>response.json())
               - returns the response in object form
            - .then(response=> console.log(response));
                - this will console log the object

# Promises

    - A promise is an object that may produce a single value sometime in the future.
    - 3 states
        - Fulfilled
        - Rejected
        - Pending
    - Callbacks (Archived way)
        - event listeners, running a function after a click.
        - functions that are planned to run after another function. (nested pyramid of doom)
    
