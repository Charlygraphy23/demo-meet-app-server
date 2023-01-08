import http from 'http'
import express from 'express'
// @ts-expect-error
import { ExpressPeerServer } from 'peer';

const peerApp = express();
const peerServer = http.createServer(peerApp)


peerApp.use('/peer' , ExpressPeerServer(peerServer , {
    path : "/"
}))


export default peerServer