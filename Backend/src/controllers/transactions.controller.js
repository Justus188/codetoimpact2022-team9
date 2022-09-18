export default class TransactionsCtrl {
  static async TestEndpoint(req, res, next){
    res.json("Hello World")
  }
  
  static async GetAll(req, res, next){
    try{
      const results = await pool.query("SELECT * FROM transactions")
      res.status(200).json(results.rows)
    } catch (err) {
      console.log(err.stack);
      res.status(500);
    }
  }

  static async GetTransactionsSummary(req, res, next) {
    {
      /*
            Min requirements:
            1. Add a transaction
            2. View a transaction (V)
            3. Cancel a transaction
            4. View the created date/time
            5. View the last modified date/time
        */
    }
    console.log('---> GetTransactionsSummary start');
    
    let query = 'SELECT * FROM transactions ORDER BY transaction_id desc';
    try {
      const results = await pool.query(query);
      if (results.rowCount == 0) {
        res.status(204);
      } else {
        res.status(200);
      }
      res.json(results.rows);
    } catch (err) {
      console.log(err.stack);
      res.status(500);
    }

    console.log('---> GetTransactionsSummary end');
  }

  static async GetTransactionById(req, res, next) {
    console.log('---> GetTransactionById start');

    const id = Number(req.params.id)
    if (id == null) {
      res.status(422).json('Invalid id.')
      return
    }
    let params = [id];
    let query = 'SELECT * FROM transactions WHERE transaction_id = $1';
    try {
      const results = await pool.query(query, params);
      if (results.rowCount == 0) {
        res.status(204);
      } else {
        res.status(200);
      }
      res.json(results.rows);
    } catch (err) {
      console.log(err.stack);
      res.status(500);
    }

    console.log('---> GetTransactionById end');
  }

  static async GetTransactionByInstrumentId(req, res, next) {
    console.log('---> GetTransactionByInstrumentId start');

    const id = Number(req.params.id)
    if (id == null) {
      res.status(422).json('Invalid id.')
    }
    let params = [req.params.id];
    let query = 'SELECT * FROM transactions WHERE instrument_id = $1';
    try {
      const results = await pool.query(query, params);
      if (results.rowCount == 0) {
        res.status(204);
      } else {
        res.status(200);
      }
      res.json(results.rows);
    } catch (err) {
      console.log(err.stack);
      res.status(500);
    }

    console.log('---> GetTransactionByInstrumentId end');
  }

  static async AddTransaction(req, res, next) {
    console.log('---> AddTransaction start');

    // let instrumentId = req.params.instrumentId
    // let quantity = req.params.quantity
    // let transactionAmount = req.params.transactionAmount
    // let transactionType = req.params.transactionType
    // let transactionDate = req.params.transactionDate

    let query =
      'INSERT INTO transactions (instrument_id, quantity, transaction_amount, transaction_type, transaction_date, created_time, modified_time) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0))';

    try {
      let params = [
        req.body.instrumentId,
        req.body.quantity,
        req.body.transactionAmount,
        req.body.transactionType,
        req.body.transactionDate,
      ];
      const results = await pool.query(query, params);
      if (results.rowCount == 0) {
        res.status(204);
      } else {
        res.status(200);
      }
      res.json(results.rows);
    } catch (err) {
      console.log(err.stack);
      res.status(500);
    }
    console.log('---> AddTransaction end');
  }

  static async CancelTransaction(req, res, next) {
    console.log('---> CancelTransaction start');
    let transactionId = req.params.id;
    let params = [transactionId];
    let query =
      'UPDATE transactions SET isCancelled = true, modified_time = CURRENT_TIMESTAMP(0) WHERE transaction_id = $1';

    try {
      const results = await pool.query(query, params);
      if (results.rowCount == 0) {
        res.status(204);
      } else {
        res.status(200);
      }
      res.json(results.rows);
    } catch (err) {
      console.log(err.stack);
      res.status(500);
    }
    console.log('---> CancelTransaction end');
  }
}
