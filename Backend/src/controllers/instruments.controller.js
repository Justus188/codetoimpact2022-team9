import Ajv from 'ajv'
const ajv = new Ajv()

let instrumentSchema = {
    type: "object",
    required: ["instrument_name", "country", "sector", "instrument_type", "currency", "isTradeable"]
}

export default class InstrumentsController {
    static async TestEndpoint(req, res, next){
        res.json("Hello World")
    }

    static async GetAll(req, res, next){
        try{
            const results = await pool.query("SELECT * FROM instruments")
            if (results.rowCount == 0) {
                res.status(204).json("No rows returned")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            console.log(err.stack)
            res.status(500).json(err)
        }
    }

    static async GetInstrumentsSummary(req, res, next){
        try {
            let query = "SELECT * FROM instruments WHERE isDeleted = false" // Limit columns based on frontend
            const results = await pool.query(query)
            if (results.rowCount == 0) {
                res.status(204).json("No rows returned")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    static async AddInstrument(req, res, next){ // TO TEST AFTER CONSTRAINT RELAXATION
        const ValidateInput = ajv.compile(instrumentSchema)
        if (!ValidateInput(req.body)) {
            res.status(422).json("Missing required fields.")
            return
        }
        const notes = req.body.notes || null
        try {
            let query = "SELECT isDeleted FROM instruments WHERE instrument_name = $1 AND country = $2 AND sector = $3 AND instrument_type = $4 AND currency = $5 AND isTradeable = $6"
            let params = [req.body.instrument_name, req.body.country, req.body.sector, req.body.instrument_type, req.body.currency, req.body.isTradeable]
            const results = await pool.query(query, params)
            if (results.rowCount > 0){
                let query = "UPDATE instruments SET isDeleted = false, notes = COALESCE($1, notes) RETURNING instrument_id"
                const results = await pool.query(query, notes)
                res.status(200).json("Update ID: " + (results.rows[0].instrument_id).toString())
                return 
            }
        } catch (err) {
            console.log(err.stack)
            res.status(500).json("isDeleted validation error")
        }
        try {
            let query = "INSERT INTO instruments (instrument_name, country, sector, instrument_type, currency, isTradeable, notes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING instrument_id"
            let params = [req.body.instrument_name, req.body.country, req.body.sector, req.body.instrument_type, req.body.currency, req.body.isTradeable, notes]
            const results = await pool.query(query, params)
            if (results.rowCount == 0){
                res.status(500).json("Insert failed.")
            } else {
                res.status(200).json("Updated ID: " + (results.rows[0].instrument_id).toString())
            }
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    static async GetInstrumentById(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "SELECT * FROM instruments WHERE instrument_id = $1 AND isDeleted = false" // DECIDE ON COLUMNS!!
        try {
            const results = await pool.query(query, params)
            if (results.rowCount == 0) {
                res.status(204).json("No rows returned")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    static async EditInstrument(req, res, next){
        const ValidateInput = ajv.compile(instrumentSchema)
        if (!ValidateInput(req.body)) {
            res.status(422).json("Missing required fields.")
            return
        }

        let id = req.params.id // future extension: partial updates to merge all the other edit functions?
        let query = "UPDATE instruments SET instrument_name = $1, country = $2, sector = $3, instrument_type = $4, currency = $5, isTradeable = $6, notes = COALESCE($7, notes) WHERE instrument_id = $8"
        try {
            let params = [req.body.instrument_name, req.body.country, req.body.sector, req.body.instrument_type, req.body.currency, req.body.isTradeable, req.body.notes || null, id]
            const results = await pool.query(query, params)
            if (results.rowCount == 0) {
                res.status(204).json("No rows returned")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            console.log(err.stack)
            res.json(500)
        }
    }

    static async SoftDeleteInstrument(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        console.log("SOFT delete")
        let query = "UPDATE instruments SET isDeleted = true WHERE instrument_id = $1"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
            if (results.rowCount == 0) {
                res.status(204).json("No rows returned")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    static async GetCreated(req, res, next){
        let params = [req.params.id]
        let query = "SELECT created_time FROM instruments WHERE instrument_id = $1"
        try {
            const results = await pool.query(query, params)
            if (results.rowCount == 0) {
                res.status(204).json("No rows returned")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            console.log(err.stack)
            // res.json()
        }
    }

    static async GetModified(req, res, next){
        let params = [req.params.id]
        let query = "SELECT modified_time FROM instruments WHERE instrument_id = $1"
        try {
            const results = await pool.query(query, params)
            if (results.rowCount == 0) {
                res.status(204).json("No rows returned")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            console.log(err.stack)
            res.json(500).err
        }
    }

    static async EditTradeable(req, res, next){
        try {
            let params = [req.params.id]
            let query = "UPDATE instruments SET isTradeable = NOT isTradeable WHERE instrument_id = $1"// update a softdeleted column
            const results = await pool.query(query, params)
            if (results.rowCount == 0) {
                res.status(500).json("No rows changed.")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            console.log(err.stack)
            res.json(500)
        }
    }

    static async EditCountry(req, res, next){
        const country = req.body.country
        if (country == null) {
            res.status(422).json("Missing required request body field: country.")
            return
        }
        try {
            let params = [country, req.params.id]
            let query = "UPDATE instruments SET country = $1 WHERE instrument_id = $2"// update a softdeleted column
            const results = await pool.query(query, params)
            if (results.rowCount == 0) {
                res.status(500).json("No rows changed.")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            res.status(500).json(err)
        }        
    }

    static async EditSector(req, res, next){
        const sector = req.body.sector
        if (sector == null) {
            res.status(422).json("Missing required request body field: sector.")
            return
        }
        let params = [sector, req.params.id]
        let query = "UPDATE instruments SET sector = $1 WHERE instrument_id = $2"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
            if (results.rowCount == 0) {
                res.status(500).json("No rows changed.")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            res.status(500).json(err)
        }       
    }

    static async EditNotes(req, res, next){
        const notes = req.body.notes
        if (notes == null) {
            res.status(422).json("Missing required request body field: notes.")
            return
        }
        let params = [notes, req.params.id]
        let query = "UPDATE instruments SET notes = $1 WHERE instrument_id = $2"// update a softdeleted column
        try {
            const results = await pool.query(query, params)
            if (results.rowCount == 0) {
                res.status(500).json("No rows changed.")
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            res.status(500).json(err)
        }            
    }
}