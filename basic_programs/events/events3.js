var EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('newEvent',function(user){
     console.log(user);
});

emitter.emit('newEvent','gauri')