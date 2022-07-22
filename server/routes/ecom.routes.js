const EcomController= require('../controllers/ecom.controller');

module.exports = (app) => {
    app.get("/api/ecom", EcomController.findAllEcoms)
    app.post("/api/ecom", EcomController.createEcom)
    app.get("/api/ecom/:id", EcomController.getOneEcom)
    app.put("/api/ecom/:id", EcomController.updateOneEcom)
    app.delete("/api/ecom/:id", EcomController.deleteOneEcom)
}

