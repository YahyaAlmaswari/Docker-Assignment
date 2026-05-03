const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(600, { 'Content-Type': 'text/plain' });
  res.end('Hello Yahya! from Dockerized Node.js App!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});