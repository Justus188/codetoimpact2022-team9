//import instruments from './src/instruments.route.js'
//import valuations from './src/valuations.route.js'
//import transactions from './src/transactions.route.js'
//import investments from './src/investments.route.js'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (request, response) => {response.json({info: 'Node.js, Express, Postgres API'})})

//app.use('/api/instruments', instruments)
//app.use('/api/valuations', valuations)
//app.use('/api/transactions', transactions)
//app.use('/api/investments', investments)
//app.use('/api/analytics', analytics)
app.use('*', (req, res) => res.status(404).json({error: "not found"}))

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })