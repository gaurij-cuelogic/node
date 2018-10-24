var EventEmitter = require('events');
const emitter = new EventEmitter();

var listener1 = function listener1(){
    console.log('listener1 executed');
}

var listener2 = function listener1(){
    console.log('listener2 executed');
}

emitter.addListener('connection',listener1);
emitter.on('connection',listener2);

emitter.emit('connection');

