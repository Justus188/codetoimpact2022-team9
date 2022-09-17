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
        //res.status(200).json(results.rows)
        res.json({GetInstrumentsSummary: id})
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

        //res.status(200).json(results.rows)
        res.json({GetInstrumentById: id})
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

        //res.status(200).json(results.rows)
        res.json({GetInstrumentById: id})
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
        //res.status(200).json(results.rows)
        res.json({EditInstrument: id})
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
        //res.status(200).json(results.rows)
        res.json({SoftDeleteInstrument: id})
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
        //res.status(200).json(results.rows)
        res.json({GetCreated: id})
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
        //res.status(200).json(results.rows)
        res.json({GetModified: id})
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
        //res.status(200).json(results.rows)
        res.json({EditTradeable: id})
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
        //res.status(200).json(results.rows)
        res.json({EditCountry: id})
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
        //res.status(200).json(results.rows)
        res.json({EditSector: id})
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
        //res.status(200).json(results.rows)
        res.json({EditNotes: id})
    }
}