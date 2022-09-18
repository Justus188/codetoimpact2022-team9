import express from "express"

import InstrumentsCtrl from "../controllers/instruments.controller.js" // db controller
import InvestmentsCtrl from "../controllers/investments.controller.js"

const router = express.Router()

router.route("/test/instruments").get(InstrumentsCtrl.TestEndpoint)
router.route("/instruments/all").get(InstrumentsCtrl.GetAll)
router.route("/investments/all").get(InvestmentsCtrl.GetAll)

export default router