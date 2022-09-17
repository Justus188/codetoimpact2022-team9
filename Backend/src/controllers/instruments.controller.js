import Ajv from 'ajv'
const ajv = new Ajv()

export default class InstrumentsController {
    static async Test(req, res, next){
        res.json("Hello World")
    }

    static async GetAll(req, res, next){
        try{
            const results = await pool.query("SELECT * FROM instruments")
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    instrumentSchema = {
        "type": "object",
        "required": ["instrument_name", "country", "sector", "instrument_type", "currency", "isTradeable"],
    }

    static async GetInstrumentsSummary(req, res, next){
        let query = "SELECT * FROM instruments WHERE isDeleted = false" // Limit columns based on frontend
        try {
            const results = await pool.query(query) // paginate?
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    static async AddInstrument(req, res, next){ // TO TEST AFTER CONSTRAINT RELAXATION
        const ValidateInput = ajv.compile(instrumentSchema)
        if (!ValidateInput(req)) {
            res.status(422).json("Missing required fields.")
            return
        }
        try {
            let query = "SELECT isDeleted FROM instruments WHERE instrument_name = $1 AND country = $2 AND sector = $3 AND instrument_type = $4 AND currency = $5 AND isTradeable = $6"
            let params = [req.body.instrument_name, req.body.country, req.body.sector, req.body.instrument_type, req.body.currency, req.body.isTradeable]
            const results = await pool.query(query, params)
            console.log(results)
        } catch (err) {
            console.log(err.stack)
            res.status(500).json("isDeleted validation error")
        }
        try {
            let query = "INSERT INTO instruments (instrument_name, country, sector, instrument_type, currency, isTradeable, notes) VALUES ($1, $2, $3, $4, $5, $6, $7)"
            let params = [req.body.instrument_name, req.body.country, req.body.sector, req.body.instrument_type, req.body.currency, req.body.isTradeable, req.body.notes || null]
            const results = await pool.query(query, params)
            res.status(200).json(results.row)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
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

    static async EditInstrument(req, res, next){
        const ValidateInput = ajv.compile(instrumentSchema)
        if (!ValidateInput(req)) {
            res.status(422).json("Missing required fields.")
            return
        }

        let id = req.params.id
        let query = "UPDATE instruments SET instrument_name = $1, country = $2, sector = $3, instrument_type = $4, currency = $5, isTradeable = $6, notes = COALESCE($7, notes) WHERE instrument_id = $8"
        try {
            console.log(req.body.notes)
            let params = [req.body.instrument_name, req.body.country, req.body.sector, req.body.instrument_type, req.body.currency, req.body.isTradeable, req.body.notes || null, id]
            const results = await pool.query(query, params)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            res.json(500)
        }
    }

    static async SoftDeleteInstrument(req, res, next){ // Currently hard deletes idk how
        let id = req.params.id
        let params = [req.params.id]
        console.log("SOFT delete")
        let query = "UPDATE instruments SET isDeleted = true WHERE instrument_id = $1"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
            res.status(200).json("Proper response to be assigned")
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
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

    static async EditCountry(req, res, next){
        let params = [req.body.country, req.params.id]
        let query = "UPDATE instruments SET country = $1 WHERE instrument_id = $2"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
            res.status(200).json(results.rows)
        } catch (err) {
            res.status(500).json(err)
        }        
    }

    static async EditSector(req, res, next){
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