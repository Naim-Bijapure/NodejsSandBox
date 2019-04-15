const path = require('path')
const eventEmitter = require('events');
const os = require('os');

const em = new eventEmitter();

console.log('hello naim');
process.nextTick(run1);

function run1() {
  console.log('cool running 1'); 
  
}
function run2() {
  console.log('cool running 2'); 
  
}
function run3() {
  console.log('cool running 3 '); 
  
}

setTimeout(run2, 0);
setTimeout(run3, 0);

process.on('exit',()=>{
  console.log('bye bye',process.cwd());
  process.stdout.write('cool man'); 

});



em.on('start',function (a,b) {
  // console.log(a, b, this, this === em);
console.log('started uptime is ',os.uptime)
})

em.emit('start','a','b')
em.emit('start','a','b')
