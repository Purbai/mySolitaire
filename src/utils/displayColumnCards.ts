import { Card } from "../card_data/card_data";
// set up globally to allow sharing of card(s) selected
import { getSelectedCard, setSelectedCard } from './cardState';
export const displayColumnCards = (cardstoCol:Card[][] ) => {
 
 // Clear existing cards
 for (let i = 1; i <= 7; i++) {
    const pile = document.querySelector(`.game__solitaire-pile--${i}`);
    if (pile) pile.innerHTML = '';
  }

  // Render cards into their respective piles
  cardstoCol.forEach((column, colIndex) => {
    const pile = document.querySelector(`.game__solitaire-pile--${colIndex + 1}`);
    if (!pile) return;

    column.forEach((card, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.textContent = card.isFaceUp ? card.toString() : "🂠";
      cardDiv.classList.add("card");
      if (!card.isFaceUp) {
        cardDiv.classList.add("card--facedown");
      }
      else{
          cardDiv.style.color = (card.colour === 'Red' && card.isFaceUp) ? 'red' : (card.isFaceUp) ? 'black' : 'white'
      }
      cardDiv.style.marginTop = `-85px`;
      cardDiv.addEventListener('click', () => {
        // Only allow clicking on face-up cards
        if (!card.isFaceUp) return;
        const selected = getSelectedCard();
      
        if (!selected) {
          // card is selected when clicked

            setSelectedCard({card, fromCol:colIndex, cardIndex: index});
          cardDiv.style.outline = '4px solid blue'; // highlight the card selected
        } else {
          const toColIndex = colIndex;
      
          // Don't allow dropping on same card or same column below it
          if (toColIndex === selected.fromCol && selected.cardIndex >= index) {
            //selectedCard = null;
            setSelectedCard(null);
            displayColumnCards(cardstoCol); // reset
            return;
          }
      
          //const fromCol = cardsToLayout[fromColIndex];
          const toCol = cardstoCol[toColIndex];
          const movingCard = selected.card;
          const destTopCard = toCol[toCol.length - 1];

          const isValid =
          (destTopCard &&
            destTopCard.isFaceUp &&
            destTopCard.colour !== movingCard.colour &&
            destTopCard.internalValue === movingCard.internalValue + 1) ||
          (toCol.length === 0 && movingCard.label === 'K');

          if (!isValid) {
            alert("Card can only be moved to a different colour and card is of higher value");
            setSelectedCard(null);
            displayColumnCards(cardstoCol);
            return;
          }

          // Remove card and all cards beneath it from source column
          const movingCards = cardstoCol[selected.fromCol].splice(selected.cardIndex);
      
          // Add to destination column
          cardstoCol[toColIndex].push(...movingCards);
      
          // Flip new top card in source column face-up if any remain
          const fromColCards = cardstoCol[selected.fromCol];
          if (fromColCards.length > 0) {
            fromColCards[fromColCards.length - 1].isFaceUp = true;
          }
      
          // Reset selection
          setSelectedCard(null);
      
          // re-render the cards
          displayColumnCards(cardstoCol);
        }
      });
      pile.appendChild(cardDiv);
    });
  });
}
