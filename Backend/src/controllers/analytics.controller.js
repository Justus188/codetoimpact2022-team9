import Ajv from 'ajv';
const ajv = new Ajv();

export default class AnalyticsCtrl {
    static async TestEndpoint(req, res, next){
        res.json("Hello World")
    }

    static async CalcProfit(req, res, next){

    }

    static async GetMarketValueBreakdown(req, res, next) {
        try {
            let query = "SELECT instrument_id, -SUM(transaction_amount) AS total_mkt_value FROM transactions GROUP BY instrument_id"
            let result = pool.query(query)
            console.log(result)
            res.status(200)
        } catch (err) {
            res.status(500).json("Error retrieving instruments transacted.")
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