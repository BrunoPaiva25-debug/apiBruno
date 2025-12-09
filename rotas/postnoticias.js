module.exports = (app) => {
    app.post("/postnoticias", async (req, res) => {
        try {
            const conteudonoticia = req.body.conteudonoticia
            const titulonoticia = req.body.titulonoticia
            const tiponoticia = req.body.tiponoticia
            await app.dbClient.connect();
            const resultado = await app.dbClient.db("portalnoticias")
            .collection("noticias")
            .insertOne({titulonoticia: titulonoticia,
                 conteudonoticia: conteudonoticia,
                 tiponoticia:tiponoticia,
                datahoracadastro: new Date()})
            res.status(200).send("Notícia Gravada com Sucesso!",resultado)
        } catch (error) {
            res.status(400).send("Erro ao Gravar a Notícia: ", error)

        }
    })
}