"use strict";

function handleClickSearchCard(event) {
  event.preventDefault();
  const userSearch = searchInput.value;

  const filteredCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(userSearch)
  );

  renderAllCards(filteredCharacters); //no pinta. ahora sí!
}

searchBtn.addEventListener("click", handleClickSearchCard);
