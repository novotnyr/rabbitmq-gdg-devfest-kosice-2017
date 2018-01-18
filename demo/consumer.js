#!/usr/bin/env node

var amqp = require("amqplib/callback_api");
var queue = "cabbage";
var options = { noAck : true };

amqp.connect('amqp://localhost', function(err, connection) {
  connection.createChannel(function(err, channel) {
    channel.assertQueue(queue);
    channel.consume(queue, handleCabbageMessage, options);
  });
});

function handleCabbageMessage(message) {
  console.log(message.content.toString());
}
