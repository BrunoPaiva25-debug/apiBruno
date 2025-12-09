const { ObjectId } = require("mongodb");
module.exports = (app) => {
    app.delete("/delnoticias", async (req, res) => {
        try {
            const id = ObjectId.createFromHexString(req.body._id)
            await app.dbClient.connect();
            const resultado = await app.dbClient.db('portalnoticias')
                .collection('noticias')
                .deleteOne({ _id: id })
            if (!resultado.deletedCount) {
                throw new Error("Nenhuma notícia foi apagada — id não encontrado.");
            }
            res.status(200).send("Notícia apagada com sucesso")
        } catch (error) {
            res.status(400).send("erro ao apagar a notícia: " + error)
        }
    })
}