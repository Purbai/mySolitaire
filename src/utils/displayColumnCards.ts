import { Card } from "../card_data/card_data";
// set up globally to allow sharing of card(s) selected
import { getSelectedCard, setSelectedCard } from './cardState';
import { displayRemainingAndWasteCards } from "./displayRemainingAndWasteCards";

export const displayColumnCards = (cardstoCol: Card[][], wastePile:Card[], remainingPile:Card[]) => {
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
    pile.addEventListener('click', () => {
      const selected = getSelectedCard();
      if (!selected || cardstoCol[colIndex].length!==0) return;

      // const movingCard = selected.card;

      if (selected.card.label ==="K") {
        let movingCards: Card[]=[];

        if (selected.fromCol===-1) {
          //moving card from the waste pile
          movingCards = [selected.card];
          wastePile.pop();
        } else {
          movingCards = cardstoCol[selected.fromCol].splice(selected.cardIndex);
        }
        cardstoCol[colIndex].push(...movingCards);

        const fromCol = cardstoCol[selected.fromCol];
        if (selected.fromCol !==-1) {
        if (fromCol.length > 0) {
          fromCol[fromCol.length - 1].isFaceUp = true;
        }
      }

        setSelectedCard(null);
        displayColumnCards(cardstoCol, wastePile,remainingPile);
        displayRemainingAndWasteCards(remainingPile, wastePile);
      } else {
        alert("Only Kings can be moved to empty columns.");
      }
    });

    // Render cards in pile
    column.forEach((card, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.textContent = card.isFaceUp ? card.toString() : "🂠";
      cardDiv.classList.add("card");
      cardDiv.style.marginTop = `-85px`;
      if (!card.isFaceUp) {
        cardDiv.classList.add("card--facedown");
      } else {
        cardDiv.style.color = card.colour === 'Red' ? 'red' : 'black';
      }

      //cardDiv.style.marginTop = `-85px`; // overlapping

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

              //console.log("Attempting to move:", movingCard.label, movingCard.internalValue);
              
          if (!isValid) {
            alert("Card must be dropped on opposite colour and one rank higher.");
            setSelectedCard(null);
            displayColumnCards(cardstoCol, wastePile,remainingPile);
            return;
          }
          let movingCards: Card[]=[];
          if (selected.fromCol===-1) {
            movingCards = [selected.card];
            wastePile.pop();
            // if there are any more cards in the pile, then turn the card face-up
            if (wastePile.length > 0){
              wastePile[wastePile.length-1].isFaceUp= true;
              // need to check for cany cards which still face-up but not top card, then need to changed to be faced down
              // still need to add this logic
            }
          }
          else {
            movingCards = cardstoCol[selected.fromCol].splice(selected.cardIndex);
          }
          cardstoCol[colIndex].push(...movingCards);
          
          if (selected.fromCol!==-1) {
          const fromCol = cardstoCol[selected.fromCol];
          if (fromCol.length > 0) {
            fromCol[fromCol.length - 1].isFaceUp = true;
          }
        }
          setSelectedCard(null);
          displayColumnCards(cardstoCol,wastePile,remainingPile);
          displayRemainingAndWasteCards(remainingPile,wastePile);
        }
      });

      pile.appendChild(cardDiv);
    });
  });
};