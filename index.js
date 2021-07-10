const express = require("express");

const app = express();

app.get("/", function (req, resp) {
   resp.send("hello heroku");
});

app.listen(process.env.PORT || 5000);
