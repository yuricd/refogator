import * as express from 'express';
import { Response, NextFunction } from 'express-serve-static-core';
import { IOption, IVertex } from './Bot/Types';
import Example from './Example/Example';

enum MessageType {
  QUESTION = 'QUESTION',
  ANSWER = 'ANSWER',
  FINISH = 'FINISH',
}

const app = express();
app.set('port', process.env.PORT || 3000);

const http = require('http').Server(app);
const io = require('socket.io')(http);
const exampleGraph = Example();

app.set('io', io);

io.on('connection', (socket: any) => {
  console.log('A user connected');

  socket.emit(MessageType.QUESTION, JSON.stringify(exampleGraph.vertices[0]));
  console.log('Enviando', JSON.stringify(exampleGraph.vertices[0]));

  socket.on(MessageType.ANSWER, (message: IOption) => {
    console.log('Recebendo', message);
    const nextVertex = exampleGraph.vertices.filter(v => v._id === message.next)[0];
    if (nextVertex) {
      console.log('Next', nextVertex);
      socket.emit(MessageType.QUESTION, JSON.stringify(nextVertex));
    } else {
      console.log('fim');
      socket.emit(MessageType.FINISH, JSON.stringify({ finished: true }));
    }
  });

  io.on('disconnect', (socket: any) => {
    console.log('user disconnect');
  });
});

const server = http.listen(3000, () => {
  console.log('listening on *:3000');
});