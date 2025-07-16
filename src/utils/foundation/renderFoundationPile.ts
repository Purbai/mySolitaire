import { Card } from "../../card_data/card_data";

export const renderFoundationPile = (
    suit: string,
    topCard: Card | undefined,
    foundationPile: HTMLElement
) => {
    foundationPile.innerHTML = "";
    if (topCard) {
        const cardDiv = document.createElement("div");
        cardDiv.textContent = topCard.toString();
        cardDiv.classList.add("card");
        cardDiv.style.color = topCard.colour === "Red" ? "red" : "black";
        foundationPile.appendChild(cardDiv);
    } else {
        foundationPile.textContent = suit;
    }
};
