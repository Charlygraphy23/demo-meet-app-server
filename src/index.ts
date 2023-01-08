import express from 'express'
import http from 'http'
import { handleSocket } from './socket';
import {Server} from 'socket.io';
import peerServer from './peer';

const app = express()
const server = http.createServer(app)

const io = new Server(server , {
    cors : {
        origin : "*"
    }
});


handleSocket(io)

app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


server.listen(3001, () => {
    console.log("Server is running..")
})
peerServer.listen(9001 , () => {
    console.log("Peer Server running...")
})

