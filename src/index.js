// Use "type: commonjs" in package.json to use CommonJS modules
const express = require('express');
const app = express();
const port = 3000;
 
app.set('view engine','ejs')
app.set('views','./views')

require("../db/dbconnect")(app)
require("../rotas/home")(app)

require("../rotas/getnoticias")(app)
require("../rotas/getidnoticias")(app)
require("../rotas/gettiponoticias")(app)

require("../rotas/postnoticias")(app)
require("../rotas/putnoticias")(app)
require("../rotas/delnoticias")(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});