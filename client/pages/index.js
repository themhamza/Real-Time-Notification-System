import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

export default function Home() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('new-notification', (notification) => {
      setNotifications((prev) => [notification, ...prev]);
    });
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
}