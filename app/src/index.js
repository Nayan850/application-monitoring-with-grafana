const express = require('express');
const mysql = require('mysql2/promise');
const client = require('prom-client');
const path = require('path');

const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
});

const DB_HOST = process.env.DB_HOST || 'mysql';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || 'rootpassword';
const DB_NAME = process.env.DB_NAME || 'demo_db';

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/items', async (req, res) => {
  httpRequestsTotal.inc();
  try {
    const conn = await mysql.createConnection({
      host: DB_HOST, user: DB_USER, password: DB_PASS, database: DB_NAME
    });
    const [rows] = await conn.execute('SELECT id, name FROM items LIMIT 10');
    await conn.end();
    res.json({items: rows});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    res.send(await client.register.metrics());
  } catch (err) {
    res.status(500).end(err.message);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port ${port}`));