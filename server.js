const express = require('express');
const path = require('path');
var expressStaticGzip = require('express-static-gzip');
let app = express();

app.use('/', expressStaticGzip(path.join(__dirname + "/dist"), {
 enableBrotli: true
}));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});
