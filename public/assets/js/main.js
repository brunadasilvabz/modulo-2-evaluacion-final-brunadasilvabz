"use strict";

//------------------------QUERYSELECTOR----------------------------------

const cardList = document.querySelector(".js-cardList");
const favCardList = document.querySelector(".js-favList");
const searchInput = document.querySelector(".js-input");
const searchBtn = document.querySelector(".js-button");

//---------VARIABLES GLOBALES -> VARIABLES CON DATOS DE LA APP-----------

let characters = [];
let favCharacters = [];

"use strict";

fetch("./assets/data/characters.json", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => response.json())
  .then((charactersData) => {
    characters = charactersData;

    renderAllCards(characters);
  });

const savedFavorites = JSON.parse(localStorage.getItem("favorites"));

if (savedFavorites !== null) {
  favCharacters = savedFavorites;
  renderFavCharacters(savedFavorites);
}

"use strict";

//-------------------------------FUNCIONES-------------------------------

function renderOneCard(oneCharacterCard, domElement) {
  //DOM AVANZADO PARA PINTAR LAS TARJETAS

  const cardsInFavListIndex = favCharacters.findIndex(
    (eachCardObj) => eachCardObj.char_id === oneCharacterCard.char_id
  );

  let classFavorite = "";

  if (cardsInFavListIndex === -1) {
    classFavorite = "";
  } else {
    classFavorite = "selected";
  }

  const liElement = document.createElement("li");
  liElement.setAttribute("class", "listElement");

  const articleElement = document.createElement("article");

  articleElement.setAttribute(
    "class",
    `js-articleElement listElement__article ${classFavorite}`
  );
  articleElement.setAttribute("id", `${oneCharacterCard.char_id}`);

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

function renderAllCards(cards) {
  //bucle para que se pinten cada una de las tarjetas de personaje
  cardList.innerHTML = "";
  for (const card of cards) {
    renderOneCard(card, cardList);
  }
  addListListeners();
}

function renderFavCharacters(favCards) {
  //bucle para que se pinten las tarjetas favoritas
  favCardList.innerHTML = ""; //para que dejen de duplicarse las tarjetas de personajes
  for (const favCard of favCards) {
    renderOneCard(favCard, favCardList);
  }
}

"use strict";
function addListListeners() {
  //función para crear eventos sobre todos los elementos de la lista
  const allCardElements = document.querySelectorAll(".js-articleElement");

  for (const eachCardElements of allCardElements) {
    eachCardElements.addEventListener("click", handleClickFavCard);
  }
}

function handleClickFavCard(event) {
  //evento para seleccionar favoritos y que se guarden en el array y localStorage
  const selectedCard = characters.find(
    (eachCardObj) => eachCardObj.char_id === parseInt(event.currentTarget.id)
  );

  const cardsInFavListIndex = favCharacters.findIndex(
    (eachCardObj) => eachCardObj.char_id === parseInt(event.currentTarget.id)
  );

  if (cardsInFavListIndex === -1) {
    console.log(favCharacters);
    favCharacters.push(selectedCard); //para guardarlo en el array si todavía no está en él, sin añadirlo más veces (en teoría, pero no me funciona, se siguen duplicando)

    localStorage.setItem("favorites", JSON.stringify(favCharacters));
  } else {
    //si ya está en favoritos

    favCharacters.splice(cardsInFavListIndex, 1);

    localStorage.setItem("favorites", JSON.stringify(favCharacters));
  }

  renderFavCharacters(favCharacters);
  renderAllCards(characters);
  //se pintan duplicados pero lo arreglamos en el bucle
}

"use strict";

function handleClickSearchCard(event) {
  //función para buscar los personajes por nombre y pintarlos
  event.preventDefault();
  const userSearch = searchInput.value;

  const filteredCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(userSearch)
  );

  renderAllCards(filteredCharacters);
}

searchBtn.addEventListener("click", handleClickSearchCard);


//# sourceMappingURL=main.js.map
