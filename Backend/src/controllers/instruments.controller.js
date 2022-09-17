import pool from '../db/querypooler.js'

export default class RestaurantsController {
    static async GetInstrumentsSummary(req, res, next){
        res.json({GetInstrumentsSummary: id})
    }

    static async AddInstrument(req, res, next){
        let id = req.params.id
        res.json({AddInstrument: id})
    }

    static async GetInstrumentById(req, res, next){
        let id = req.params.id
        res.json({GetInstrumentById: id})
    }

    static async EditInstrument(req, res, next){
        let id = req.params.id
        res.json({EditInstrument: id})
    }

    static async SoftDeleteInstrument(req, res, next){
        let id = req.params.id
        res.json({SoftDeleteInstrument: id})
    }

    static async GetCreated(req, res, next){
        let id = req.params.id
        res.json({GetCreated: id})
    }

    static async GetModified(req, res, next){
        let id = req.params.id
        res.json({GetModified: id})
    }

    static async EditTradeable(req, res, next){
        let id = req.params.id
        res.json({EditTradeable: id})
    }

    static async EditCountry(req, res, next){
        let id = req.params.id
        res.json({EditCountry: id})
    }

    static async EditSector(req, res, next){
        let id = req.params.id
        res.json({EditSector: id})
    }

    static async EditNotes(req, res, next){
        let id = req.params.id
        res.json({EditNotes: id})
    }
}