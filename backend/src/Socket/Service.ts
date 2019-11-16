export const Sock = (io: any) => ({
  establish() {
    io.on('connection', (socket: any) => {
      console.log('A user connected');
    
      socket.on('message', (message: any) => {
        console.log(message);
        socket.emit('message', message);
      });
    });
  }
});