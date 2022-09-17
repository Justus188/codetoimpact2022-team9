import express from "express"

const router = express.Router()

router.route("/db/connect").get(Connect)

export default router

class tests {
    static async Connect(req, res, next){
        
    }
}