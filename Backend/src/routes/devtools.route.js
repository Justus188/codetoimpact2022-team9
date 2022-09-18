import express from "express"

import InstrumentsCtrl from "../controllers/instruments.controller.js" // db controller
import InvestmentsCtrl from "../controllers/investments.controller.js"
import TransactionsCtrl from "../controllers/transactions.controller.js"

const router = express.Router()

router.route("/instruments/testendpoint").get(InstrumentsCtrl.TestEndpoint)
router.route("/instruments/all").get(InstrumentsCtrl.GetAll)
router.route("/investments/all").get(InvestmentsCtrl.GetAll)
router.route("/transactions/all").get(TransactionsCtrl.GetAll)

export default router