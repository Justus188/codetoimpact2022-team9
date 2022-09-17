import express from "express"

import TransactionsCtrl from "../controllers/transactions.controller.js" // db controller

const router = express.Router()

router.route("/").get(TransactionsCtrl.GetTransactionsSummary)
router.route("/").post(TransactionsCtrl.AddTransaction)
router.route("/:id")
    .get(TransactionsCtrl.GetTransactionById)
    .delete(TransactionsCtrl.CancelTransaction)

router.route("/by_instrument/:id").get(TransactionsCtrl.GetTransactionByInstrumentId)
export default router