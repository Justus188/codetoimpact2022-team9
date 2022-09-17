import express from "express"

import InvestmentsCtrl from "../controllers/investments.controller.js" // db controller

const router = express.Router()

router.route("/:instrumentId")
    .get(InvestmentsCtrl.GetInvestmentById)
    .post(InvestmentsCtrl.RefreshInvestmentById)

export default router