"use strict";
function addListListeners() {
  //función para crear eventos sobre todos los elementos de la lista
  const allCardElements = document.querySelectorAll(".js-articleElement");

  for (const eachCardElements of allCardElements) {
    eachCardElements.addEventListener("click", handleClickFavCard);
  }
}

function handleClickFavCard(event) {
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
  //se pintan duplicados
}
