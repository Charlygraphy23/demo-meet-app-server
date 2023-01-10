const express= require('express')
const http = require('http')
const peer = require('peer')


const app = express()
const server = http.createServer(app)


app.use("/peerjs" , peer.ExpressPeerServer(server , {
    debug : true
}))

exports.peerServer = server