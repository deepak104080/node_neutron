const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
//process

// console.log('before creation of event emiiter');
setTimeout(function() {
    // creation of event
    // triggering event
    eventEmitter.emit('newevent');
}, 5000)

setTimeout(function() {
    eventEmitter.emit('newevent2', 2, 3);
}, 7000)

//click dom event
//<button>Click here</button>

// console.log('after creation of event emiiter');


//===================================================================

eventEmitter.on('newevent', () => {
    console.log('Event object received.');
})

eventEmitter.on('newevent2', (a,b) => {
    console.log('Event object received from 2', a, b);
})

// button.addEventListner('click', function() {

// })