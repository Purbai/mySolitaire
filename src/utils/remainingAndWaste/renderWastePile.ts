import { Card } from "../../card_data/card_data";
import { setSelectedCard } from "../../state/cardState";

export const renderWastePile = (wasteDiv: HTMLElement, wastePile: Card[]) => {
  const visible = wastePile.slice(-3); // last 3 cards

  visible.forEach((card, idx) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    if (!card.isFaceUp) {
      cardDiv.classList.add("card--facedown");
      cardDiv.textContent = "🂠";
    } else {
      cardDiv.textContent = card.toString();
      cardDiv.style.color = card.colour === "Red" ? "red" : "black";

      if (idx === visible.length - 1) {
        cardDiv.addEventListener("click", (e) => {
          e.stopPropagation();
          setSelectedCard({
            card,
            fromCol: -1,
            cardIndex: wastePile.length - 1,
          });
          cardDiv.style.outline = "4px solid blue";
        });
      }
    }

    cardDiv.style.position = "absolute";
    cardDiv.style.left = `${idx * 10}px`;
    wasteDiv.appendChild(cardDiv);
  });
};
