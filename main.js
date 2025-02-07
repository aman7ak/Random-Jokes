let joke = document.getElementById("joke");
let punchline = document.getElementById("punchline");
let btn = document.getElementById("btn");
let emoji = ["🤣", "😂", "😅", "😆", "😄", "😋"];
let random;
let promiseCall;
let fetchCall;

window.onload = () => {
  generateJoke();
};

async function generateJoke() {
  promiseCall = new Promise((resolve, reject) => {
    fetchCall = fetch("https://official-joke-api.appspot.com/random_joke");
    fetchCall
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        resolve(val);
      })
      .catch((err) => {
        reject("Some error occured " + err);
      });
  });
  random = Math.floor(Math.random() * 6);
  try {
    let obj = await promiseCall;
    joke.innerText = obj["setup"];
    punchline.innerText = `Punchline: ${obj["punchline"]} ${emoji[random]}`;
  } catch (err) {
    joke.innerText = err;
  }
}

btn.addEventListener("click", () => {
  generateJoke();
});
