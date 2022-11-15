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
