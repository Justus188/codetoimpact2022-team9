export default class ValuationsController {
    valuationsSchema = {
        "type": "object",
        "required": ["instrument_id", "market_value", "market_value_date", "modified_time"],
    }

    static async GetMarketValues(req, res, next){
        let params = [req.params.id]
        let query = "SELECT * FROM MarketValues WHERE instrument_id = $1" 
        try {
            const results = await pool.query(query, params)
            console.log(results)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    static async AddMarketValues(req, res, next){
        const ValidateInput = ajv.compile(valuationsSchema)
        if (!ValidateInput(req)) {
            res.status(422).json("Missing required fields.")
            return
        }

        let query = "INSERT INTO instruments (instrument_id, market_value, market_value_date, created_time, modified_time) VALUES ($1, $2, $3, $4, $5)"
        
        try {
            let params = [req.body.instrument_id, req.body.market_value, req.body.market_value_date, req.body.created_time, req.body.modified_time]
            const results = await pool.query(query, params)
            res.status(200).json(results.row)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    static async EditMarketValues(req, res, next){
        const ValidateInput = ajv.compile(valuationsSchema)
        if (!ValidateInput(req)) {
            res.status(422).json("Missing required fields.")
            return
        }

        let id = req.params.id
        let query = "UPDATE instruments SET market_value = $1, market_value_date = $2, modified_time = $3 WHERE instrument_id = $4"
        try {
            let params = [req.body.market_value, req.body.market_value_date, req.body.modified_time, id]
            const results = await pool.query(query, params)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            res.json(500)
        }
    }
}