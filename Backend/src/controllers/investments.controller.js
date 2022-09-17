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
            if (results.rowCount == 0) {
                res.status(204).json(results.rows)
            } else{
                res.status(200).json(results.rows)
            }
        } catch (err) {
            console.log(err.stack)
            res.status(500)
        }
        
        console.log("---> GetInvestmentById end")
    }

    static async RefreshInvestmentById(req, res, next) {
        let buy, sell
        try {    
            let params = [req.params.instrumentId]
            let query = "SELECT SUM(quantity) AS cumulativequantity, SUM(transaction_amount) AS cumulativetransactionamount FROM transactions WHERE instrument_id = $1 AND isCancelled = false"
            buy = await pool.query(query + " AND transaction_type = 'BUY'", params)
            sell = await pool.query(query + " AND transaction_type = 'SELL'", params)
        } catch(err){
            console.log(err.stack)
            res.status(500).json("Error with transactions")
        }
        try {
            let query = "INSERT INTO investment (cumulativequantity, cumulativetransactionamount) VALUES ($1, $2) RETURNING investmentid"
            let params = [buy.cumulativequantity - sell.cumulativequantity, buy.cumulativetransactionamount - sell.cumulativetransactionamount]
            let results = await pool.query(query, params)
            if (results.rowCount == 0){
                res.status(500).json("Insert failed.")
            } else {
                res.status(200).json("Updated ID: " + (results.rows[0].investmentid).toString())
            }
        } catch (err) {
            console.log(err.stack)
            res.status(500).json("Error with investments")
        }
    }
}