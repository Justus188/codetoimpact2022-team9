import express from "express"

import AnalyticsCtrl from "../controllers/analytics.controller.js" // db controller

const router = express.Router()

router.route("/market-value/breakdown").get(AnalyticsCtrl.GetMarketValueBreakdown)
router.route("/market-value/date").get(AnalyticsCtrl.GetMarketValueDate)
router.route("/profit/breakdown").get(AnalyticsCtrl.GetProfitBreakdown)
router.route("/profit/date").get(AnalyticsCtrl.GetProfitDate)
router.route("/topN").get(AnalyticsCtrl.GetTopInvestments)

export default router