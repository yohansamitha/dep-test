const express = require("express");

const app = express();

app.get("/", function (req, resp) {
   resp.send("hello heroku");
});

app.get("/testing", function (req, resp) {
   resp.send("testing github and heroku");
});

app.listen(process.env.PORT || 5000);
