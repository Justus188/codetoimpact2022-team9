import pg from 'pg'

export default class InstrumentsController {
    static async GetInstrumentsSummary(req, res, next){
        let query = "SELECT * FROM instruments" // WHERE isDeleted = false" // DECIDE ON COLUMNS!!
        try {
            const results = await pool.query(query)
            console.log(results)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    static async AddInstrument(req, res, next){ // TO TEST AFTER CONSTRAINT RELAXATION
        
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
        let query = "SELECT * FROM instruments WHERE instrument_id = $1"// AND isDeleted = false" // DECIDE ON COLUMNS!!
        try {
            const results = await pool.query(query, params)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    static async EditInstrument(req, res, next){ // TO TEST AFTER CONSTRAINT RELAXATION
        let id = req.params.id

        //try {
        //    const results = await pool.query("SELECT isDeleted FROM instruments WHERE instrumentId = id")
        //} catch(err) {
        //    console.log(err.stack)
            //res.json()
        //}

        let query = "UPDATE instruments SET instrument_name = $1, country = $2, sector = $3, instrument_type = $4, currency = $5, isTradeable = $6, notes = COALESCE($7, notes) WHERE instrument_id = $8"
        try {
            console.log(req.body.notes)
            let params = [req.body.instrumentName, req.body.country, req.body.sector, req.body.instrumentType, req.body.instrumentCurrency, req.body.isTradeable, req.body.notes || null, id]
            const results = await pool.query(query, params)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
    }

    static async SoftDeleteInstrument(req, res, next){ // TO TEST AFTER isDeleted
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
        let query = "SELECT created_time FROM instruments WHERE instrument_id = $1"
        try {
            const results = await pool.query(query, params)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
    }

    static async GetModified(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "SELECT modified_time FROM instruments WHERE instrument_id = $1"
        try {
            const results = await pool.query(query, params)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
    }

    static async EditTradeable(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "UPDATE instruments SET isTradeable = NOT isTradeable WHERE instrument_id = $1"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
        
        
    }

    static async EditCountry(req, res, next){ // TO TEST AFTER RELAXATIN
        let id = req.params.id
        let params = [req.body.country, req.params.id]
        let query = "UPDATE instruments SET country = $1 WHERE instrument_id = $2"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
            const check = await pool.query()
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }        
    }

    static async EditSector(req, res, next){ // TO TEST AFTER RELAXATION
        let id = req.params.id
        let params = [req.body.sector, req.params.id]
        let query = "UPDATE instruments SET sector = $1 WHERE instrument_id = $2"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
    }

    static async EditNotes(req, res, next){
        let id = req.params.id
        let params = [req.body.notes, req.params.id]
        let query = "UPDATE instruments SET notes = $1 WHERE instrument_id = $2"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
            res.status(200).json()
        } catch (err) {
            console.log(err.stack)
        }        
    }
}