export default class ValuationsController {
    static async AddMarketValues(req, res, next){
        let query = "INSERT INTO MarketValues (instrumentId, marketValue, marketValueDate) VALUES "
        //query += res.body.marketValues.reduce((total, obj) => total + ", (" + res.params.id + ", " + obj.value + ", ", obj.date + ")", "")
        //try {
        //    const results = await pool.query(query)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({
            instrumentId: req.params.id,
            marketValues: req.body.marketValues
        })
    }

    static async GetMarketValues(req, res, next){
        let id = req.params.id
        let params = [req.params.id]
        let query = "SELECT * FROM MarketValues WHERE instrument_id = $1" 
        try {
            const results = await pool.query(query)
            console.log(results)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
        //try {
        //    let query = "SELECT * FROM valuations" + res.body.marketValues.reduce((segment, ))
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        // res.status(200).json({
        //     instrumentId: req.params.id,
        //     marketValues: [{"value": 500000000, "date": "2022-01-01"}, {"value": 600000000, "date": "2022-02-01"}]
        // })
    }

    static async EditMarketValues(req, res, next){
        //try {
        //    let query = "SELECT * FROM valuations" + res.body.marketValues.reduce((segment, ))
        //    const results = await pool.query(query, params)
        //} catch (err) {
        //    console.log(err.stack)
            // res.json()
        //}
        //console.log(results.rows[0])
        //res.status(200).json(results.rows)
        res.status(200).json({
            instrumentId: req.params.id,
            marketValues: [{"value": 500000000, "date": "2022-01-01"}, {"value": 600000000, "date": "2022-02-01"}]
        })
    }
}