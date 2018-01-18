Let My Rabbits Carry Your Messages
==================================

Introduction to RabbitMQ message
broker. Why and when to use RabbitMQ?
What are the typical use-cases
and solutions in the world of Rabbit?

Presented at Košice GDG DevFest, Nov 24th 2017.

Demo
----
In the demo, we will show a JavaScript/node.js
client that will consume messages from RabbitMQ
queue.

### Sending
Let's use local RabbitMQ broker and let's
send messages from the UI based on the
http://localhost:15672/#/exchanges.

To send messages, we will use the `default`
exchange, with `cabbage` routing key
and an arbitrary payload (how about `nom nom nom`).

Messages will be sent from the orange UI.

### Receiving messages
To receive messages, let's create a queue
called `cabbage`. This queue will be automatically
bound to the default queue. Whenever
a message is sent to the `default` queue
with the `cabbage` routing key, RabbitMQ
will route this message to the queue
with the same name as the routing key -- 
effectively sending it to the `cabbage`
queue. This is the default behaviour
of the `default` exchange.

To receive message, let's run

	node consumer.js
	
When the message is sent from the orange
UI, it will show up in the `node.js`
client, as it is consumed from the `cabbage`
queue.	