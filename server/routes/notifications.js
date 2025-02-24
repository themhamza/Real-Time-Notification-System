import express from 'express';
import Notification from '../models/Notification.js'; 

const router = express.Router();


router.post('/', async (req, res) => {
  const { userId, message } = req.body;
  const notification = new Notification({ userId, message });
  await notification.save();
  res.status(201).json(notification);
});


router.get('/', async (req, res) => {
  const notifications = await Notification.find({}).sort({ createdAt: -1 });
  res.json(notifications);
});

export default router;