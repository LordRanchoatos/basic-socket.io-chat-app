const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors : {origin: "*"}
})

io.on("connection", (socket) => {
    console.log(`a user ${socket.id} just connected`);

    socket.on("message", (chat) => {
        console.log(chat, `by ${socket.id.substr(0,3)}`);
        io.emit('message', `${chat} by: ${socket.id.substr(0,3)}`)
    })
})

http.listen(3000, ()=>console.log("the server is listening on port 3000"))



// const http = require('http').createServer();

// const io = require('socket.io')(http, {
//     cors: { origin: "*" }
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('message', (message) =>     {
//         console.log(message);
//         io.emit('message', `${socket.id.substr(0,2)} said ${message}` );   
//     });
// });

//http.listen(8080, () => console.log('listening on http://localhost:8080') );


// Regular Websockets

// const WebSocket = require('ws') 
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });


 
