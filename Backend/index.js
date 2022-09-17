import express from 'express'
import bodyParser from 'body-parser'
import dotenv from "dotenv"
import pg from 'pg'

import devtools from './src/routes/devtools.route.js'
import instruments from './src/routes/instruments.route.js'
import valuations from './src/routes/valuations.route.js'
import transactions from './src/routes/transactions.route.js'
//import investments from './src/routes/investments.route.js'
//import tests from './tests.js'

dotenv.config()

global.pool = new pg.Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
})

const app = express()
const port = process.env.PORT || 5001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (request, response) => {response.json({info: 'Node.js, Express, Postgres API'})})

app.use('/dev', devtools)
app.use('/api/instruments', instruments)
app.use('/api/market-values', valuations)
app.use('/api/transactions', transactions)
//app.use('/api/investments', investments)
//app.use('/api/analytics', analytics)
app.use('*', (req, res) => res.status(404).json({error: "not found"}))

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })