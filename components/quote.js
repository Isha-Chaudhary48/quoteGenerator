require("dotenv").config();

async function handleImage() {
  try {
    const image = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    const data = await image.json();

    const randomImage = Math.floor(Math.random() * data.length);
    const selectImage = data[randomImage];
    console.log(selectImage);
    return selectImage;
  } catch (error) {
    console.log("error in fetching image", error);
    return null;
  }
}
handleImage();

async function handleQuote() {
  try {
    const quote = await fetch(
      "https://api.api-ninjas.com/v1/quotes?category=happiness",
      {
        headers: {
          "X-Api-Key": process.env.API_KEY,
        },
      }
    );

    const data = await quote.json();

    const randomQuote = Math.floor(Math.random() * data.length);
    const selectQuote = data[randomQuote];
    console.log(selectQuote);
    return selectQuote;
  } catch (error) {
    console.log("error in fetching quote", error);
    return null;
  }
}
handleQuote();

module.exports = { handleImage, handleQuote };
