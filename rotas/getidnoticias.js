const { ObjectId } = require("mongodb")
module.exports = (app) => {
    app.get("/noticias/id/:id", async (req, res) => {
        try {
            const id = ObjectId.createFromHexString(req.params.id)
            await app.dbClient.connect();
            const resultado = await app.dbClient.db('portalnoticias')
                .collection('noticias')
                .find({ _id: id })
                .toArray();
            res.json(resultado);
        } catch (error) {
            res.json(error);

        }
    })
}