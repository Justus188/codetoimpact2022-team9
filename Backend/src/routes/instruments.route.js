import express from "express"

import InstrumentsCtrl from "../controllers/instruments.controller.js" // db controller

const router = express.Router()

router.route("/:id")
    .post(InstrumentsCtrl.AddInstrument)
    .get(InstrumentsCtrl.GetInstrumentById)
    .put(InstrumentsCtrl.EditInstrument)
    .delete(InstrumentsCtrl.SoftDeleteInstrument)
router.route("/:id/created").get(InstrumentsCtrl.GetCreated)
router.route("/:id/modified").get(InstrumentsCtrl.GetModified)
router.route("/:id/tradeable").put(InstrumentsCtrl.EditTradeable)
router.route("/:id/country").put(InstrumentsCtrl.EditCountry)
router.route("/:id/sector").put(InstrumentsCtrl.EditSector)
router.route("/:id/notes").put(InstrumentsCtrl.EditNotes)

export default router