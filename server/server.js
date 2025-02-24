import express from 'express';
import cors from 'cors';
import connectDB from './utils/db.js'; 
import authRoutes from './routes/auth.js'; 
import notificationRoutes from './routes/notifications.js'; 
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);


io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});