import express from 'express'
import bodyParser from 'body-parser'
import dotenv from "dotenv"

import instruments from './src/routes/instruments.route.js'
import valuations from './src/routes/valuations.route.js'
//import transactions from './src/routes/transactions.route.js'
//import investments from './src/routes/investments.route.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (request, response) => {response.json({info: 'Node.js, Express, Postgres API'})})

app.use('/api/instruments', instruments)
app.use('/api/market-values', valuations)
//app.use('/api/transactions', transactions)
//app.use('/api/investments', investments)
//app.use('/api/analytics', analytics)
app.use('*', (req, res) => res.status(404).json({error: "not found"}))

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })