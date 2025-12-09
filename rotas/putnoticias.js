const { ObjectId } = require("mongodb")

module.exports = (app) => {
    app.put('/putnoticias', async (req, res) => {
        try {
            const id = req.body._id
            const titulonoticia = req.body.titulonoticia
            const conteudonoticia = req.body.conteudonoticia
            await app.dbClient.connect();
            const resultado = await app.dbClient.db('portalnoticias')
                .collection('noticias')
                .updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: { titulonoticia: titulonoticia, conteudonoticia: conteudonoticia } })
                
            res.status(200).send('Dados atualizados')
        } catch (error) {
            res.status(400).send('Erro ao Gravar: ' + error)
        }
    })
}