import express from 'express'
import cors from 'cors'
import restaurants from './api/restaurants.route.js' // REPLACE ROUTER

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/instruments', instruments)
app.use('/api/valuations', valuations)
app.use('/api/transactions', transactions)
app.use('/api/investments', investments)
// app.use('/api/analytics', analytics)
app.use('*', (req, res) => res.status(404).json({error: "not found"}))

export default app