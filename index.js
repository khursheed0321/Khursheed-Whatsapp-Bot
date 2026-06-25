const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>🤖 Khursheed Bot Dashboard</h1>
    <p>Status: Online ✅</p>
  `);
});

app.listen(PORT, () => {
  console.log("Dashboard running on port " + PORT);
});

const {
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Khursheed Bot Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body{
        margin:0;
        background:#111;
        color:#fff;
        font-family:Arial,sans-serif;
      }

      .container{
        max-width:900px;
        margin:auto;
        padding:20px;
      }

      h1{
        text-align:center;
      }

      .card{
        background:#1e1e1e;
        padding:20px;
        border-radius:12px;
        margin-top:15px;
      }

      .online{
        color:lime;
      }

      button{
        padding:10px 20px;
        border:none;
        border-radius:8px;
        cursor:pointer;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>🤖 Khursheed Bot Dashboard</h1>

      <div class="card">
        <h2>Status</h2>
        <p class="online">🟢 Online</p>
      </div>

      <div class="card">
        <h2>Features</h2>
        <p>✅ Auto Reply</p>
        <p>✅ Auto Reaction</p>
        <p>✅ Welcome Message</p>
        <p>✅ Group Commands</p>
      </div>

      <div class="card">
        <h2>Owner</h2>
        <p>Khursheed</p>
      </div>
    </div>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log("Dashboard Running On Port " + PORT);
});
