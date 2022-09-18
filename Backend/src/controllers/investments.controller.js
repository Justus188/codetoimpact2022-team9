export default class InvestmentsCtrl {
    static async GetAll(req, res, next){
        try{
            const results = await pool.query("SELECT * FROM investment")
            res.status(200).json(results.rows)
        } catch(err) {
            console.log(err.stack)
            res.status(500).json(err)
        }
    }

    static async GetInvestmentById(req, res, next) {
        {/*
            Min requirements:
            1. Refresh the investment holdings using market values
            2. View an instrument market values
        */}
        console.log("---> GetInvestmentById start")
        let instrumentId = +req.params.instrumentId
        if (typeof instrumentId !== "number"){
            res.status(422).json("Specified id is not a number.")
            return
        }
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
            res.status(500).json(err)
        }
        
        console.log("---> GetInvestmentById end")
    }

    static async RefreshInvestmentById(req, res, next) {
        let params
        let instrumentId = +req.params.instrumentId
        if (typeof instrumentId !== "number"){
            res.status(422).json("Specified id is not a number.")
            return
        }
        try {    
            params = [instrumentId]
            let query = "SELECT SUM(quantity) AS cumulativequantity, SUM(transaction_amount) AS cumulativetransactionamount FROM transactions WHERE instrument_id = $1 AND isCancelled = false"
            let result = await pool.query(query, params)
            params = [instrumentId, result.rows[0].cumulativequantity, -result.rows[0].cumulativetransactionamount] //buy is -ve amount
        } catch(err){
            console.log(err.stack)
            res.status(500).json("Error with transactions")
        }
        try {
            console.log(params)
            let query = "INSERT INTO investment (instrumentid, cumulativequantity, cumulativetransactionamount, refreshdatetime) VALUES ($1, $2, $3, CURRENT_TIMESTAMP(0)) RETURNING investmentid"
            let results = await pool.query(query, params)
            if (results.rowCount == 0){
                res.status(500).json("Insert failed.")
            } else {
                res.status(200).json({investmentid: (results.rows[0].investmentid).toString(), cumulativequantity: params[0], cumulativetransactionamount: params[1]})
            }
        } catch (err) {
            console.log(err.stack)
            res.status(500).json("Error with investments")
        }
    }
}