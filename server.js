// Raksix tarafından yapılmıştır.
const express = require("express");
const app = express();



app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/app", (request, response) => {
  response.redirect("/")
});



const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
