const bgimg = document.getElementById("bgImage ");

async function image() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    const data = await response.json();
    console.log(data);
    const randomIndex = Math.floor(Math.random() * data.length);
    const select = data[randomIndex];

    const backgroundImg = document.getElementById("backgroundImg");
    backgroundImg.src = select.download_url;
    backgroundImg.style.width = "100vw";
    backgroundImg.style.height = "100vh";
    backgroundImg.style.position = "absolute";
  } catch (error) {
    console.log("error occured in fetching", error);
  }
}

async function randomQuote() {
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/quotes?category=happiness",
      {
        headers: {
          "X-Api-Key": "PWn30zW+GOVGbaF5faQlVA==sBAlzWVLXYAwVuA2",
        },
      }
    );
    const data = await response.json();
    console.log("quote", data);
    const random = Math.floor(Math.random() * data.length);
    const selectQuote = data[random];
    const quotes = document.getElementById("quote");
    const authors = document.getElementById("author");
    quotes.innerText = selectQuote.quote;

    authors.innerText = ` - ${selectQuote.author}`;
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener("load", () => {
  image();
  randomQuote();
});
