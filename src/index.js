function init() {
  fetch("http://localhost:3000/pups")
    .then((res) => res.json())
    .then((dogs) => dogs.forEach((dog) => renderOneDog(dog)));
}

// Global Scope Fuc and Variable

const img = document.createElement("img");
const h2 = document.createElement("h2");
const btn = document.createElement("button");

function isGoodDog(dog) {
  if (dog.isGoodDog) {
    btn.innerText = "Good Dog!";
  } else {
    btn.innerText = "Bad Dog!";
  }
}

function renderOneDog(dog) {
  const grabDogInfo = document.querySelector("#dog-info");
  const grabDogBar = document.querySelector("#dog-bar");
  const createSpan = document.createElement("span");
  grabDogBar.appendChild(createSpan);
  createSpan.innerText = dog.name;
  createSpan.addEventListener("click", () => {
    grabDogInfo.appendChild(img);
    img.src = dog.image;
    grabDogInfo.appendChild(h2);
    h2.innerText = dog.name;
    grabDogInfo.appendChild(btn);
    btn.id = dog.id;
    btn.className = "dog-button";
    let grabBtn = document.querySelector("dog-button");
    isGoodDog(dog);
  });
}
document.addEventListener("DOMContentLoaded", init);
