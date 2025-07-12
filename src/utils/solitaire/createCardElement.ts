import { Card } from "../../card_data/card_data";

export const createCardElement = (card: Card, cardIndex : number): HTMLDivElement => {
  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `<span class="card__corner">${card.toString()}</span>`;
  cardDiv.classList.add("card");
  //cardDiv.style.marginTop = "-60px";
  cardDiv.style.marginTop = `${cardIndex * 30}px`;

  if (!card.isFaceUp) {
    cardDiv.classList.add("card--facedown");
  } else {
    cardDiv.style.color = card.colour === "Red" ? "red" : "black";
  }

  return cardDiv;
};