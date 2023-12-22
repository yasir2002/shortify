const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");
const app = express();

mongoose.connect(
  "mongodb+srv://yasir2002:EliteBook2002@cluster0.vgcb7fd.mongodb.net/?retryWrites=true&w=majority"
),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl});
  res.redirect("/");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server started");
});
