//EventEmitter is a class
const EventEmitter = require('events');

//create object
const emitter = new EventEmitter();

//listener is a function that executes when an event has occured
//register a listener
//should be before emit
emitter.on('messageLogged', function(){
  console.log("Listener called");
});


//Raise an event
//arg is name of event
emitter.emit('messageLogged');

