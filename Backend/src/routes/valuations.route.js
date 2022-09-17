import express from "express"

import ValuationsCtrl from "../controllers/valuations.controller.js" // db controller

const router = express.Router()

router.route("/:id")
    .get(ValuationsCtrl.GetMarketValues)
    .post(ValuationsCtrl.AddMarketValues)

export default router