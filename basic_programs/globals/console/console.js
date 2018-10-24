//same
// console.log prints the element in an HTML-like tree
// console.dir prints the element in a JSON-like tree
console.log("hi","hello");
console.info("hi","hello");

console.error("this is an error"); //error in console of browser
console.warn("some warning"); //warning in console of browser


//Time the number of milliseconds it takes to perform a for-loop a hundred thousand times
var i;
console.time("test1");
for (i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd("test1");

//console.trace
function myFunction() {
    myOtherFunction();
  }
  
  function myOtherFunction() {
    console.trace();
  }

  myFunction();

  //The console.assert() method writes a message to the console, but only if an expression evaluates to false.
console.assert(false,"this will appear")
  console.assert(true,"this will not appear");
