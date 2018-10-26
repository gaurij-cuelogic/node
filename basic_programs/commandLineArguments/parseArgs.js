var argv = require('minimist')(process.argv.slice(2));
console.log(argv)

//o/p:
//gauri@gauri:~/node/basic_programs/commandLineArguments$ node parseArgs.js -x 3 -y 4 -n5 -abc hi bye bye
//{ _: [ 'bye', 'bye' ], x: 3, y: 4, n: 5, a: true, b: true, c: 'hi' }
