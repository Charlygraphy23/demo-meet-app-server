const express = require('express')
const http = require('http')
const {peerServer} = require("./peerjs")
const { Server } = require("socket.io")
const { handleSocket } = require('./utils/socket')


const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors : {
        origin : "*"
    }
});

handleSocket(io)


server.listen(3000 , () => {
    console.log("Listening ... 3000")
})

peerServer.listen(9000 , () => {
    console.log("Listening peer server..")
})