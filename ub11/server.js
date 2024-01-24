const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = parse(body);
            const name = parsedBody.name || 'leer';
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Hallo ${name}!`);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('kein parameter in post method');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
