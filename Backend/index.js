import dotenv from "dotenv"
import pg from 'pg'

import app from './app.js'

dotenv.config()

const port = process.env.PORT || 5001

global.pool = new pg.Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
})



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })