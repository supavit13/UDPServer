var PORT = 6000;
var HOST = '159.89.206.210';

var dgram = require('dgram');
var moment = require('moment-timezone');
var server = dgram.createSocket('udp4');
var mqtt = require('mqtt');
var event = require('events');

event.EventEmitter.prototype._maxListeners = 100;
var options = {
    port: 22829,
    host: "m11.cloudmqtt.com",
    username: "enotxhte",
    password: "rfB0sIYhc81n"
}
var client = mqtt.connect('mqtts://m11.cloudmqtt.com', options);


server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    var now = moment()
    var formatted = now.format('YYYY-MM-DD HH:mm:ss')
    if(message!=null){
        console.log(message.flight);
    }
    // console.log(remote.address + ':' + remote.port +' - ' + message + ' time : '+formatted);
    client.on('connect', function () {
        client.publish('node2', message)
        console.log("publish successfully")
    });

});

server.bind(PORT, HOST);