import { Card } from "../../card_data/card_data";

export const createCardElement = (
    card: Card,
    cardIndex: number
): HTMLDivElement => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `<span class="card__corner">${card.toString()}</span>`;
    cardDiv.classList.add("card");

    let marginTop: number = 40;
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) marginTop = 20;
    else if (screenWidth <= 768) marginTop = 30;

    cardDiv.style.marginTop = `${cardIndex * marginTop}px`;

    if (!card.isFaceUp) {
        cardDiv.classList.add("card--facedown");
    } else {
        cardDiv.style.color = card.colour === "Red" ? "red" : "black";
    }

    return cardDiv;
};
