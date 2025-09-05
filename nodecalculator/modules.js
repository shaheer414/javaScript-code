const http = require('http');
const os = require('os');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const uptime = (os.uptime() / 60).toFixed(2); // minutes
  const totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2); // GB
  const freeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);   // GB
  const usedMem = (totalMem - freeMem).toFixed(2);

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>System Monitor</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #1e1e2f;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .card {
          background: #2e2e3e;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
          width: 400px;
        }
        h1 {
          text-align: center;
          color: #4CAF50;
        }
        p {
          margin: 8px 0;
        }
        .highlight {
          color: #00e6e6;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>System Monitor</h1>
        <p><b>OS Platform:</b> <span class="highlight">${os.platform()}</span></p>
        <p><b>OS Type:</b> <span class="highlight">${os.type()}</span></p>
        <p><b>Release:</b> <span class="highlight">${os.release()}</span></p>
        <p><b>CPU Cores:</b> <span class="highlight">${os.cpus().length}</span></p>
        <p><b>Architecture:</b> <span class="highlight">${os.arch()}</span></p>
        <p><b>System Uptime:</b> <span class="highlight">${uptime} minutes</span></p>
        <p><b>Total Memory:</b> <span class="highlight">${totalMem} GB</span></p>
        <p><b>Used Memory:</b> <span class="highlight">${usedMem} GB</span></p>
        <p><b>Free Memory:</b> <span class="highlight">${freeMem} GB</span></p>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`System Monitor running at http://${hostname}:${port}/`);
});
