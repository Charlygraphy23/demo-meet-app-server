import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

type IoType = Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>


export const handleSocket = (_io : IoType) => {
    initializeIo(_io)
}

const initializeIo = (io : IoType) => {
    io.on('connection' , (socket) => {

        socket.on('join-room' , (roomID , userId) => {
            console.log(roomID)
            socket.join(roomID)
            socket.to(roomID).except(socket.id).emit("new-user-joined" , userId)

        })
    })
}



