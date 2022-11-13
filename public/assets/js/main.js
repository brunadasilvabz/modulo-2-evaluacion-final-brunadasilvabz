"use strict";
console.log("funciona?funciona");

//------------------------QUERYSELECTOR--------------------------------

const cardList = document.querySelector(".js-cardList");
const favCardList = document.querySelector(".js-favList");
const searchInput = document.querySelector(".js-input");
const searchBtn = document.querySelector(".js-button");

//----------------------VARIABLES GLOBALES -> VARIABLES CON DATOS DE LA APP--------------

let characters = [];
let favCharacters = [];

//-------------------------------FUNCIONES-------------------------------

function renderOneCard(oneCharacterCard, domElement) {
  //DOM AVANZADO PARA PINTAR LAS TARJETAS
  const liElement = document.createElement("li");
  //liElement.setAttribute("class", "listElement");
  liElement.setAttribute("class", "js-listElement");
  liElement.setAttribute("id", `${oneCharacterCard.char_id}`);
  const articleElement = document.createElement("article");
  articleElement.setAttribute("class", "listElement__article");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", `${oneCharacterCard.img}`);
  imageElement.setAttribute("alt", `${oneCharacterCard.name}`);
  imageElement.setAttribute("class", "listElement__article--img");

  const nameElement = document.createElement("h3");
  const nameTextElement = document.createTextNode(`${oneCharacterCard.name}`);
  nameElement.setAttribute("class", "listElement__article--name");

  const statusElement = document.createElement("p");
  const statusTextElement = document.createTextNode(
    `${oneCharacterCard.status}`
  );
  statusElement.setAttribute("class", "listElement__article--status");

  nameElement.appendChild(nameTextElement);
  statusElement.appendChild(statusTextElement);
  articleElement.appendChild(imageElement);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(statusElement);
  liElement.appendChild(articleElement);
  domElement.appendChild(liElement);
}

//revisar
function renderAllCards(cards) {
  //bucle para que se pinten cada una de las tarjetas de personaje
  for (const card of cards) {
    renderOneCard(card, cardList);
  }

  addListListeners();
}

//revisar
function renderFavCharacters(favCards) {
  //bucle para que se pinten las tarjetas favoritas

  for (const favCard of favCards) {
    renderOneCard(favCard, favCardList);
  }
}

function addListListeners() {
  //función para crear eventos sobre todos los elementos de la lista
  const allCardElements = document.querySelectorAll(".js-listElement");
  console.log(allCardElements);
  for (const eachCardElements of allCardElements) {
    eachCardElements.addEventListener("click", handleClickCard);
  }
}

//--------------------------------------EVENTOS-------------------------------------

function handleClickCard(event) {
  //aqui no toqué nada!
  //console.log("clickclickclick");
  //console.log(event);
  event.currentTarget.classList.toggle("selected");
  //console.log(event.currentTarget);

  //console.log(event.currentTarget.id);
  //console.log(characters);

  const selectedCard = characters.find(
    (eachCardObj) => eachCardObj.char_id === parseInt(event.currentTarget.id)
  );
  console.log(selectedCard);

  const cardsInFavList = favCharacters.find(
    (eachCardObj) => eachCardObj.char_id === parseInt(event.currentTarget.id)
  );

  console.log(cardsInFavList);

  if (!cardsInFavList) {
    favCharacters.push(selectedCard); //para guardarlo en el array si todavía no está en él
  } else {
    //si ya está en favoritos
  }

  renderFavCharacters(favCharacters); //función para pintar las tarjetas seleccionadas como favoritas
  console.log(favCharacters); //en la consola aparecen los que tengo seleccionados, pero no se pintan
}

/*searchInput.addEventListener("input", (event) => {
  event.preventDefault();
  const userSearch = searchInput.value.toLowerCase();
  console.log(searchInput.value);

  const filteredCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(userSearch)
  );

  renderAllCards(filteredCharacters); //NO FUNCIONA
});*/

//-------------------------------CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA-------------------------------

//renderAllCards(characters);

fetch("https://breakingbadapi.com/api/characters", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => response.json())
  .then((charactersData) => {
    //console.log(charactersData);
    characters = charactersData;

    //console.log(characters);

    renderAllCards(characters);
  });

//# sourceMappingURL=main.js.map
