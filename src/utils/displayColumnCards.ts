import { Card } from "../card_data/card_data";

 export const displayColumnCards = (cardstoCol:Card[][] ) => {
 
 // Clear existing cards
 for (let i = 1; i <= 7; i++) {
    const pile = document.querySelector(`.solitaire__pile--${i}`);
    if (pile) pile.innerHTML = '';
  }

  // Render cards into their respective piles
  cardstoCol.forEach((column, colIndex) => {
    const pile = document.querySelector(`.solitaire__pile--${colIndex + 1}`);
    if (!pile) return;

    column.forEach((card, rowIndex) => {
      const cardDiv = document.createElement("div");
      cardDiv.textContent = card.isFaceUp ? card.toString() : "🂠";
      cardDiv.classList.add("card");
      if (!card.isFaceUp) {
        cardDiv.classList.add("card--facedown");
      }
      else{
          cardDiv.style.color = (card.colour === 'Red' && card.isFaceUp) ? 'red' : (card.isFaceUp) ? 'black' : 'white'
      }
      cardDiv.style.marginTop = `-80px`;
      pile.appendChild(cardDiv);
    });
  });
}