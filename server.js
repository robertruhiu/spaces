const express = require('express');

// const serveStatic = require('serve-static');
let expressStaticGzip = require("express-static-gzip");
let app = express();
// app.use(serveStatic(__dirname + "/dist"));

app.use("/", expressStaticGzip("dist", {
    enableBrotli: true,
    orderPreference: ['br','gz']
}));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});
