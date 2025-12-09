const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.dbconn; // chave gravada em variável de ambiente
// MongoClient
module.exports = (app) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  app.dbClient = client; // agora pode ser acessado em qualquer lugar com app.dbClient
};