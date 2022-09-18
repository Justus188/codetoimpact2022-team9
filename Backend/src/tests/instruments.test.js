import supertest from 'supertest'
import app from '../../app'

describe("Add an instrument", async () => {
    test("It should accept 6 fields", async () => {
        const requestShort = {
            instrument_name: "Paragon Inc",
            country: "US",
            sector: "Technology",
            instrument_type: "Private Equity",
            currency: "USD",
            isTradeable: true
        }
        const res = supertest(app).post('/api/instruments').send(requestShort)
        expect(res.statusCode).toEqual(200)
    })
})