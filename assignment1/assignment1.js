require('dotenv').config();
const http = require('http');

const requestListener = (req,res) => {
    res.end("ASSIGNMENT 1");
}

const server = http.createServer(requestListener);

server.listen(process.env.PORT,()=>{
    console.log("server is running")
})