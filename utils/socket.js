exports.handleSocket = (io) => {

    io.on('connection' , socket => {
        


        socket.on('new-join' , (userId , room = 10) => {
            socket.join(room)
          
            // socket.to(room).except(socket.id).emit(, )
            console.log("New User Joined " , socket.id , room)
            socket.broadcast.to(room).emit("new-user-joined",userId);




            socket.on('video-close' , (userId , _room = 10) => {
                console.log("video-close")
                socket.broadcast.to(_room).emit("delete-video",userId);
               
            })
    
            socket.on('disconnect' , () => {
                console.log("Socket Disconnected" , socket.id)
                socket.broadcast.to(room).emit("delete-video",userId);
            })
        })
      

    })

}