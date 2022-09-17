import pool from '../db/querypooler.js'

export default class TnstrumentsController {
    static async GetInstrumentsSummary(req, res, next){
        let query = "SELECT * FROM instruments WHERE isDeleted = false" // DECIDE ON COLUMNS!!
        //try {
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}

        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({
            instrumendId: 1,
            instrumentName: "Paragon Inc",
            instrumentType: "Private Equity",
            country: "US",
            sector: "Technology",
            instrumentCurrency: "USD",
            isTradeable: true,
            createdAt: Date(),
            modifiedAt: Date()
        })
    }

    static async AddInstrument(req, res, next){
        
        let query = "INSERT INTO instruments (instrumentName, country, sector, instrumentType, instrumentCurrency, isTradeable, notes) VALUES ($1, $2, $3, $4, $5, $6, $7)"

        // check if previously deleted

        //try {
        //    let params = [req.body.instrumentName, req.body.country, req.body.sector, req.body.instrumentType, req.body.instrumentCurrency, req.body.isTradeable, req.body.notes || null]
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json(1)
    }

    static async GetInstrumentById(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "SELECT * FROM instruments WHERE instrumentId = $1 AND isDeleted = false" // DECIDE ON COLUMNS!!
        //try {
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({
            instrumendId: 1,
            instrumentName: "Paragon Inc",
            instrumentType: "Private Equity",
            country: "US",
            sector: "Technology",
            instrumentCurrency: "USD",
            isTradeable: true,
            createdAt: Date(),
            modifiedAt: Date()
        })
    }

    static async EditInstrument(req, res, next){
        let id = req.params.id

        //try {
        //    const results = await pool.query("SELECT isDeleted FROM instruments WHERE instrumentId = id")
        //} catch(err) {
        //    console.log(err.stack)
            //res.json()
        //}

        //let query = "UPDATE instruments SET instrumentName = $1, country = $2, sector = $3, instrumentType = $4, instrumentCurrency = $5, isTradeable = $6, notes = COALESCE($7, notes)) WHERE instrumentId = $7"
        //try {
        //    let params = [req.body.instrumentName, req.body.country, req.body.sector, req.body.instrumentType, req.body.instrumentCurrency, req.body.isTradeable, req.body.notes || null]
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({
            instrumendId: 1,
            instrumentName: req.body.instrumentName,
            instrumentType: req.body.instrumentType,
            country: req.body.country,
            sector: req.body.sector,
            instrumentCurrency: req.body.instrumentCurrency,
            isTradeable: req.body.isTradeable,
            createdAt: Date(),
            modifiedAt: Date(),
            notes: req.body.notes || null
        })
    }

    static async SoftDeleteInstrument(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "UPDATE instruments SET isDeleted = true WHERE instrumentId = $1"// update a softdeleted column
        //try {
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200)
        res.status(200)
    }

    static async GetCreated(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "SELECT createdAt FROM instruments WHERE instrumentId = $1"
        //try {
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({createdAt: Date()})
    }

    static async GetModified(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "SELECT modifiedAt FROM instruments WHERE instrumentId = $1"
        //try {
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({createdAt: Date()})
    }

    static async EditTradeable(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "UPDATE instruments SET isTradeable = NOT isTradeable WHERE instrumentId = $1"// update a softdeleted column
        //try {
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({
            instrumendId: req.params.id,
            instrumentName: "Paragon Inc",
            instrumentType: "Private Equity",
            country: "US",
            sector: "Technology",
            instrumentCurrency: "USD",
            isTradeable: true,
            createdAt: Date(),
            modifiedAt: Date()
        })
    }

    static async EditCountry(req, res, next){
        let id = req.params.id
        let params = [req.body.country, req.params.id]
        let query = "UPDATE instruments SET country = $1 WHERE instrumentId = $2"// update a softdeleted column
        //try {
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({
            instrumendId: req.params.id,
            instrumentName: "Paragon Inc",
            instrumentType: "Private Equity",
            country: req.body.country,
            sector: "Technology",
            instrumentCurrency: "USD",
            isTradeable: true,
            createdAt: Date(),
            modifiedAt: Date()
        })
    }

    static async EditSector(req, res, next){
        let id = req.params.id
        let params = [req.body.sector, req.params.id]
        let query = "UPDATE instruments SET sector = $1 WHERE instrumentId = $2"// update a softdeleted column
        //try {
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({
            instrumendId: req.params.id,
            instrumentName: "Paragon Inc",
            instrumentType: "Private Equity",
            country: "US",
            sector: req.body.sector,
            instrumentCurrency: "USD",
            isTradeable: true,
            createdAt: Date(),
            modifiedAt: Date()
        })
    }

    static async EditNotes(req, res, next){
        let id = req.params.id
        let params = [req.body.notes, req.params.id]
        let query = "UPDATE instruments SET notes = $1 WHERE instrumentId = $2"// update a softdeleted column
        //try {
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({
            instrumendId: req.params.id,
            instrumentName: "Paragon Inc",
            instrumentType: "Private Equity",
            country: "US",
            sector: "Technology",
            instrumentCurrency: "USD",
            isTradeable: true,
            createdAt: Date(),
            modifiedAt: Date(),
            notes: req.body.note
        })
    }
}