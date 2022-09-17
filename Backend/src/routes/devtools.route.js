import express from "express"

import InstrumentsCtrl from "../controllers/instruments.controller.js" // db controller

const router = express.Router()

router.route("/test/instruments").get(InstrumentsCtrl.TestEndpoint)
router.route("/instruments/all").get(InstrumentsCtrl.GetAll)

export default router