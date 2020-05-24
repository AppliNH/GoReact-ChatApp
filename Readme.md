# What is it

A simple real time chat application, built with React, Socket.io and [FireGo](https://github.com/AppliNH/firego).

# How do I set it up ?

There's a docker-compose file here at the root, you'll need Docker & Docker-compose on your host :

- ```git clone``` the project
- ```cd``` inside it
- run ```docker-compose build```
- run ```docker-compose up```
- the app should run on your ```http://localhost```

# How do I use the app ?

This app relies on routes for its functionnalities.

For example ```http://localhost/room/test/username/toto``` will log you in the room ```test``` with the username ```toto```.

All messages and rooms are saved in the FireGo database, which runs on your computer through docker-compose.

### Wait.. What is FireGo ?

If you don't know FireGo, you better [check this out](https://github.com/AppliNH/firego) :)