import Ajv from 'ajv';
const ajv = new Ajv();

export default class AnalyticsCtrl {
    static async TestEndpoint(req, res, next){
        res.json("Hello World")
    }

    static async GetMarketValueBreakdown(req, res, next) {
        try {
            let query = "SELECT instrument_id, SUM(transactions.quantity) AS qty, t_mkt_vals.market_value AS mkt_val FROM transactions WHERE isCancelled = false GROUP BY instrument_id JOIN (SELECT DISTINCT ON instrument_id, market_value_date, market_value FROM marketvalues ORDER BY instrument_id, market_value_date DESC AS t_mkt_vals) ON transactions.instrument_id = t_mkt_vals.instrument_id"
            let result = await pool.query(query)
            console.log(result)
            res.status(200)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
    }

    static async GetMarketValueDate(req, res, next){
        res.status(404)
        // Filter Investment 
    }

    static async GetProfitBreakdown(req, res, next){
        res.status(404)
    }

    static async GetProfitDate(req, res, next){
        res.status(404)
    }

    static async GetTopInvestments(req, res, next){
        const date = Date(req.body.date);
        if (date == null) {
            res.status(422).json('Missing required request body field: date.');
            return;
        }
        // ROI = Profit / Original Price
    }
}

