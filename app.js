// app.js — MUST be named exactly this (pure JavaScript, no .ts)
const next = require('next');
const { createServer } = require('http');
const { parse } = require('url');

const port = process.env.PORT || 3000;
const dev = false;
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`Next.js running on port ${port}`);
  });
});