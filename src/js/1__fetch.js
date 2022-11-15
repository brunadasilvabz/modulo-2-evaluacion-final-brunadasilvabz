"use strict";

fetch("https://breakingbadapi.com/api/characters", {
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
