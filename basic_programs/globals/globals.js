console.log(__filename);
console.log(__dirname);

function printHello(){
    console.log("hello world");
}

setTimeout(printHello,2000);

var t=setTimeout(printHello,2000);
clearTimeout(t); //no output

setInterval(printHello,2000);