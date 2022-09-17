import pool from '../db/querypooler.js'

export default class RestaurantsController {
    static async GetInstrumentsSummary(req, res, next){
        let query = "SELECT * FROM instruments" // DECIDE ON COLUMNS!!
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        res.status(200).json(results.rows)
    }

    static async AddInstrument(req, res, next){
        let id = req.params.id
        let params = [req.body.instrumentName, req.body.country, req.body.sector, req.body.instrumentType, req.body.instrumentCurrency, req.body.isTradeable, req.body.notes || null]
        let query = "INSERT INTO instruments (instrumentName, country, sector, instrumentType, instrumentCurrency, isTradeable, notes) VALUES ($1, $2, $3, $4, $5, $6, $7)"
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }

        res.status(200).json(results.rows)
    }

    static async GetInstrumentById(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "SELECT * FROM instruments WHERE instrumentId = $1" // DECIDE ON COLUMNS!!
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }

        res.status(200).json(results.rows)
    }

    static async EditInstrument(req, res, next){
        let id = req.params.id
        let params = [req.body.instrumentName, req.body.country, req.body.sector, req.body.instrumentType, req.body.instrumentCurrency, req.body.isTradeable, req.body.notes || null]
        let query = "UPDATE instruments SET instrumentName = $1, country = $2, sector = $3, instrumentType = $4, instrumentCurrency = $5, isTradeable = $6, notes = COALESCE($7, notes)) WHERE instrumentId = $7"
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        res.status(200).json(results.rows)
    }

    static async SoftDeleteInstrument(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "UPDATE instruments SET isDeleted = 1 WHERE instrumentId = $1"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        res.status(200).json(results.rows)
    }

    static async GetCreated(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "SELECT createdAt FROM instruments WHERE instrumentId = $1"
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        res.status(200).json(results.rows)
    }

    static async GetModified(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "SELECT modifiedAt FROM instruments WHERE instrumentId = $1"
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        res.status(200).json(results.rows)
    }

    static async EditTradeable(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "UPDATE instruments SET isTradeable = 1 WHERE instrumentId = $1"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        res.status(200).json(results.rows)
    }

    static async EditCountry(req, res, next){
        let id = req.params.id
        let params = [req.body.country, req.params.id]
        let query = "UPDATE instruments SET country = $1 WHERE instrumentId = $2"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        res.status(200).json(results.rows)
    }

    static async EditSector(req, res, next){
        let id = req.params.id
        let params = [req.body.sector, req.params.id]
        let query = "UPDATE instruments SET sector = $1 WHERE instrumentId = $2"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        res.status(200).json(results.rows)
    }

    static async EditNotes(req, res, next){
        let id = req.params.id
        let params = [req.body.notes, req.params.id]
        let query = "UPDATE instruments SET notes = $1 WHERE instrumentId = $2"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        res.status(200).json(results.rows)
    }
}