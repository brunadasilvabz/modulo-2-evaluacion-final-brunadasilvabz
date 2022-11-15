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
