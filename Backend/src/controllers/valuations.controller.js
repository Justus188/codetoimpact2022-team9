import Ajv from 'ajv';
const ajv = new Ajv();
const valuationsSchema = {
  type: 'object',
  required: [
    'instrument_id',
    'market_value',
    'market_value_date',
    'modified_time',
  ],
};

export default class ValuationsController {
  static async GetMarketValues(req, res, next) {
    let params = [req.params.id];
    let query = 'SELECT * FROM MarketValues WHERE instrument_id = $1';
    try {
      const results = await pool.query(query, params);
      console.log(results);
      res.status(200).json(results.rows);
    } catch (err) {
      console.log(err.stack);
      res.status(500);
    }
  }

  static async AddMarketValues(req, res, next) {
    // const ValidateInput = ajv.compile(valuationsSchema)
    // if (!ValidateInput(req.body)) {
    //     res.status(422).json("Missing required fields.")
    //     return
    // }

    let query =
      'INSERT INTO MarketValues (instrument_id, market_value, market_value_date, created_time, modified_time) VALUES ($1, $2, $3, CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0))';

    try {
      console.log(req);
      let params = [
        req.body.instrument_id,
        req.body.market_value,
        req.body.market_value_date,
      ];
      const results = await pool.query(query, params);
      res.status(200).json(results.row);
    } catch (err) {
      console.log(err.stack);
      res.status(500);
    }
  }

  static async EditMarketValues(req, res, next) {
    // const ValidateInput = ajv.compile(valuationsSchema)
    // if (!ValidateInput(req)) {
    //     res.status(422).json("Missing required fields.")
    //     return
    // }

    let id = req.params.id;
    let query =
      'UPDATE MarketValues SET market_value = $1, modified_time = CURRENT_TIMESTAMP(0) WHERE market_value_date = $2 AND instrument_id = $3';
    try {
      let params = [req.body.market_value, req.body.market_value_date, id];
      const results = await pool.query(query, params);
      res.status(200).json(results.rows);
    } catch (err) {
      console.log(err.stack);
      res.json(500);
    }
  }
}
