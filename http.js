const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
// TCP - Transmission Control Protocol
// UDP


// HTTP - Hyper Text Transfer Protocol
// SMTP - Simple Mail Transfer Protocol
// SSH - Secure Shell Protocol
// FTP - File Transfer protocol


// Request and Response

const server = http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/plain');
    resp.end('Server is running');
})

server.listen(port, hostname, () => {
    console.log(`Server has started at http://${hostname}:${port}/`);
})