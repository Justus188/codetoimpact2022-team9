export default class InvestmentsCtrl {
    static async GetInvestmentById(req, res, next) {
        {/*
            Min requirements:
            1. Refresh the investment holdings using market values
            2. View an instrument market values
        */}
        console.log("---> GetInvestmentById start")
        
        let instrumentId = req.params.instrumentId
        let params = [instrumentId]
        let query = "SELECT * FROM investment WHERE instrumentId = $1"
        try {
            const results = await pool.query(query, params)
            res.status(200).json(results.rows)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
        
        console.log("---> GetInvestmentById end")
    }

    static async RefreshInvestmentById(req, res, next) {
        console.log("---> RefreshInvestmentById start")
        
        let instrumentId = req.params.instrumentId
        let params = [instrumentId]

        // let ownedQty = "SELECT * FROM transactions where instrument_id = $1 AND isCancelled = 'false'"
        // let sumQty = "SELECT SUM(quantity) as cum_qty, SUM(investment) AS cum_transaction FROM transactions where investment_id = $1 AND isCancelled = false AND buy"

        // console.log(sumQty)

        // let query = "INSERT INTO investment (instrumentId, cumulativeQuantity, cumulativeTransactionAmount, refreshDatetime) VALUES (1, 1212, 12312312, CURRENT_TIMESTAMP(0))"
        // let query = "INSERT INTO investment (instrumentId, cumulativeQuantity, cumulativeTransactionAmount, refreshDatetime) VALUES (1, 1212, 12312312, CURRENT_TIMESTAMP(0))"
        // let sumQty = "SELECT SUM(quantity) as cum_qty, SUM(transactionAmount) AS cum_transaction FROM transactions where investment_id = $1 AND isCancelled = false AND 'BUY'"
        let sumQty = "SELECT SUM(quantity) FROM transactions where instrument_id = $1 AND isCancelled = false AND transaction_type = 'BUY'"
        
        
        try {
            const results = await pool.query(sumQty, params)
            res.status(200).json(results.rows)

            console.log(sumQty)
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
        
        console.log("---> RefreshInvestmentById end")
    }
}