import { Card } from "../card_data/card_data";
// set up globally to allow sharing of card(s) selected
import { getSelectedCard, setSelectedCard } from './cardState';

export const displayColumnCards = (cardstoCol: Card[][]) => {
  // Clear existing cards and listeners
  for (let i = 1; i <= 7; i++) {
    const pile = document.querySelector(`.game__solitaire-pile--${i}`);
    if (pile) {
      pile.innerHTML = '';
      const clone = pile.cloneNode(true); 
      pile.replaceWith(clone);
    }
  }

  // Render cards
  cardstoCol.forEach((column, colIndex) => {
    const pile = document.querySelector(`.game__solitaire-pile--${colIndex + 1}`);
    if (!pile) return;

    // Add pile-level click for empty column (once per pile)
    pile.addEventListener('click', (e) => {
      const selected = getSelectedCard();
      if (!selected) return;

      // Must be dropping on an empty column
      if (cardstoCol[colIndex].length !== 0) return;

      const movingCard = selected.card;
      if (movingCard.label === 'K') {
        const movingCards = cardstoCol[selected.fromCol].splice(selected.cardIndex);
        cardstoCol[colIndex].push(...movingCards);

        const fromCol = cardstoCol[selected.fromCol];
        if (fromCol.length > 0) {
          fromCol[fromCol.length - 1].isFaceUp = true;
        }

        setSelectedCard(null);
        displayColumnCards(cardstoCol);
      } else {
        alert("Only Kings can be moved to empty columns.");
      }
    });

    // Render cards in pile
    column.forEach((card, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.textContent = card.isFaceUp ? card.toString() : "🂠";
      cardDiv.classList.add("card");
      if (!card.isFaceUp) {
        cardDiv.classList.add("card--facedown");
      } else {
        cardDiv.style.color = card.colour === 'Red' ? 'red' : 'black';
      }

      cardDiv.style.marginTop = `-85px`;

      cardDiv.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent pile click from triggering
        if (!card.isFaceUp) return;

        const selected = getSelectedCard();

        if (!selected) {
          setSelectedCard({ card, fromCol: colIndex, cardIndex: index });
          cardDiv.style.outline = '4px solid blue';
        } else {
          const toCol = cardstoCol[colIndex];
          const movingCard = selected.card;
          const destTopCard = toCol[toCol.length - 1];

          const isValid =
            (destTopCard &&
              destTopCard.isFaceUp &&
              destTopCard.colour !== movingCard.colour &&
              destTopCard.internalValue === movingCard.internalValue + 1);

              console.log("Attempting to move:", movingCard.label, movingCard.internalValue);
              
          if (!isValid) {
            alert("Card must be dropped on opposite colour and one rank higher.");
            setSelectedCard(null);
            displayColumnCards(cardstoCol);
            return;
          }

          const movingCards = cardstoCol[selected.fromCol].splice(selected.cardIndex);
          cardstoCol[colIndex].push(...movingCards);

          const fromCol = cardstoCol[selected.fromCol];
          if (fromCol.length > 0) {
            fromCol[fromCol.length - 1].isFaceUp = true;
          }

          setSelectedCard(null);
          displayColumnCards(cardstoCol);
        }
      });

      pile.appendChild(cardDiv);
    });
  });
};