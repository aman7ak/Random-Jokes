let joke = document.getElementById("joke");
let punchline = document.getElementById("punchline");
let btn = document.getElementById("btn");
let emoji = ['🤣','😂','😅','😆','😄','😋'];

window.onload = ()=>{
  generateJoke();
} 

async function generateJoke() {
  let p1 = new Promise((resolve,reject)=>{
    let p = fetch("https://official-joke-api.appspot.com/random_joke");
    p.then((res) => res.json())
    .then((val) => resolve(val));
  })
  let random = Math.floor(Math.random() * 6);
  let obj = await p1;
  joke.innerText = obj["setup"];
  punchline.innerText = `Punchline: ${obj["punchline"]} ${emoji[random]}`;
  console.log(random);
}


btn.addEventListener("click", () => {
  generateJoke()
});
