// Startup file for cPanel / Namecheap "Setup Node.js App"
// Set "Application startup file" to: server.js

const next = require("next");
const http = require("http");

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`Ready on http://localhost:${port}`);
  });
});
