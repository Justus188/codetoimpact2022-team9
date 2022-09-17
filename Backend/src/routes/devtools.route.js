import express from "express"

import InstrumentsCtrl from "../controllers/instruments.controller.js" // db controller

const router = express.Router()

router.route("/instruments", InstrumentsCtrl.Test)
router.route("/instruments/all")

export default router