const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const notes = require('./routes/notes');

const LATENCY = 300;

const myMiddleware = (req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  setTimeout(next, LATENCY)
}

const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use(myMiddleware)

app.use('/notes', notes)

app.get('/', (_, res) => {
  res.json({ message: 'pong' })
})

const server = app.listen(3000, () => {
  console.log(`Listening on port http://localhost:${server.address().port}`)
})