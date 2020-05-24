var http = require('http');

const io = require('socket.io')();
const axios = require("axios")

var app = http.createServer().listen(8000);

io.listen(app);

io.on('connection', (client) => {
    client.on('subscribeToMessages', (data) => {
        console.log('client is subscribing to messages with interval ', data.interval);
        console.log('client is on room :  ', data.room);

        setInterval(async () => {
            var r = await axios.get("http://firego:5000/" + data.room)
            var messagesData = r.data
            var newObj = {}
            var newObjOrdered = {}
            
            Object.keys(messagesData).map(key => {
                var timestamp = messagesData[key].timestamp
                newObj[timestamp] = messagesData[key]
            })
            Object.keys(newObj).sort().forEach((key) => {
                newObjOrdered[key] = newObj[key];
              });

            console.log(newObjOrdered)


            client.emit('timer', newObjOrdered);
        }, data.interval);

    });

});

const port = 8000;

console.log('listening on port ', port);