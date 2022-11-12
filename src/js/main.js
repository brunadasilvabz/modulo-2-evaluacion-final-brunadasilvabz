"use strict";
console.log("funciona?funciona");

//QUERYSELECTOR

const cardList = document.querySelector(".js-cardList");
const searchInput = document.querySelector(".js-input");

//VARIABLES GLOBALES -> VARIABLES CON DATOS DE LA APP

let characters = [];

//FUNCIONES

function renderOneCard(characters) {
  //DOM AVANZADO PARA PINTAR LAS TARJETAS
  const liElement = document.createElement("li");
  liElement.setAttribute("class", "listElement");

  const articleElement = document.createElement("article");
  articleElement.setAttribute("class", "listElement__article");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", characters.img);
  imageElement.setAttribute("alt", `${characters.name}`);
  imageElement.setAttribute("class", "listElement__article--img");

  const nameElement = document.createElement("h3");
  const nameTextElement = document.createTextNode(`${characters.name}`);
  nameElement.setAttribute("class", "listElement__article--name");

  const statusElement = document.createElement("p");
  const statusTextElement = document.createTextNode(`${characters.status}`);
  statusElement.setAttribute("class", "listElement__article--status");

  nameElement.appendChild(nameTextElement);
  statusElement.appendChild(statusTextElement);
  articleElement.appendChild(imageElement);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(statusElement);
  liElement.appendChild(articleElement);
  cardList.appendChild(liElement);
}

//bucle para que se pinten cada una de las tarjetas de personaje
function renderAllCards(characters) {
  for (const character of characters) {
    renderOneCard(character);
  }
}

//EVENTOS

//CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

//renderCard();

fetch("https://breakingbadapi.com/api/characters", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => response.json())
  .then((charactersData) => {
    console.log(charactersData);
    characters = charactersData;

    console.log(characters);

    renderAllCards(characters);
  });
