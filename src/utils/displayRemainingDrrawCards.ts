import { Card } from "../card_data/card_data";

export const displayRemainingDrawCards = (remainingCards: Card[]) => {
  const drawPile = document.querySelector(".remaining__pile--todraw");
  if (!drawPile) return;

  drawPile.innerHTML = ''; // clear once, outside the loop

  remainingCards.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.textContent = "🂠"; // facedown

    // Apply classes
    cardDiv.classList.add("card", "card--facedown", "card--in-remaining");

    // Slight offset to simulate stacking
    // cardDiv.style.top = `${index * 1}px`;  
    // cardDiv.style.left = `${index * 1}px`;

    drawPile.appendChild(cardDiv);
  });
};
