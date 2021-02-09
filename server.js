const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const history = require('connect-history-api-fallback');
let expressStaticGzip = require("express-static-gzip");

let app = express();
// app.use(serveStatic(__dirname + "/dist"));
app.enable("trust proxy");

app.use(function(req, res, next) {
  console.log("inside app use");

  if (req.protocol !== "https") {
    console.log("inside conditional");
    var secureUrl = "https://" + req.headers["host"] + req.url;
    res.writeHead(301, { Location: secureUrl });
    res.end();
  }
  next();
});

app.use(history())

app.use("/", expressStaticGzip("dist", {
    enableBrotli: true,
    orderPreference: ['br','gz']
}));



app.listen(port, () => {
  console.log('Listening on port ' + port)
});

