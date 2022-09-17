import pool from '../db/querypooler.js'

export default class ValuationsController {
    static async GetMarketValues(req, res, next){
        let query = "SELECT * FROM valuations" + res.body.marketValues.reduce((segment, ))
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        console.log(results.rows[0])
        res.status(200).json(results.rows)
    }

    static async AddMarketValues(req, res, next){
        let query = "INSERT INTO valuations (instrumentId, marketValue, marketValueDate) VALUES "
        query += res.body.marketValues.reduce((total, obj) => total + ", (" + res.params.id + ", " + obj.value + ", ", obj.date + ")", "")
        try {
            const results = await pool.query(query)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        console.log(results.rows[0])
        res.status(200).json(results.rows)
    }
}