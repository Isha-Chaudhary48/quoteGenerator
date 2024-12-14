const express = require("express");
const router = express.Router();
const { handleImage, handleQuote } = require("../components/quote");
const { render } = require("ejs");

router.get("/", async (req, res) => {
  const image = await handleImage();
  console.log("image  hello ", image);
  const quote = await handleQuote();
  console.log(quote);
  if (!image || !quote) {
    return res.render("index", {
      author: "Isha",
      quote:
        "Find something more important than you are and dedicate your life to it.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
    });
  }

  return res.render("index", {
    image: image.download_url,
    quote: quote.quote,
    author: quote.author,
    madeBy: "Isha",
  });
});

module.exports = router;
