import { Card } from "../../card_data/card_data";

export const createCardElement = (card: Card): HTMLDivElement => {
  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `<span class="card__corner">${card.toString()}</span>`;
  cardDiv.classList.add("card");
  cardDiv.style.marginTop = "-60px";

  if (!card.isFaceUp) {
    cardDiv.classList.add("card--facedown");
  } else {
    cardDiv.style.color = card.colour === "Red" ? "red" : "black";
  }

  return cardDiv;
};
