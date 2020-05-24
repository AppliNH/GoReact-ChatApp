import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');


function subscribeToMessages(cb, room) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToMessages', { interval: 1000, room: room });
}
export { subscribeToMessages };