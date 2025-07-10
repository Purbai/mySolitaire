import { Card } from "../card_data/card_data";
import { getSelectedCard, setSelectedCard } from './cardState';

let isInitialized = false;

export function displayRemainingAndWasteCards(remainingPile: Card[], wastePile: Card[]) {
  const remainDiv = document.querySelector('.game__remaining-pile--todraw') as HTMLElement;
  const wasteDiv = document.querySelector('.game__remaining-pile:not(.game__remaining-pile--todraw)') as HTMLElement;

  remainDiv.innerHTML = remainingPile.length > 0 ? "🂠" : ""; // Face-down symbol
  wasteDiv.innerHTML = '';

  const visible = wastePile.slice(-3); // Last 3 cards
  visible.forEach((card, idx) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    if (!card.isFaceUp) {
      cardDiv.classList.add('card--facedown');
      cardDiv.textContent = "🂠";
    } else {
      cardDiv.textContent = card.toString();
      cardDiv.style.color = card.colour === 'Red' ? 'red' : 'black';
    //}

    if (idx === visible.length - 1) {
      cardDiv.addEventListener('click', (e) => {
        e.stopPropagation(); // Avoid interference
        setSelectedCard({
          card,
          fromCol: -1, // -1 means waste pile
          cardIndex: wastePile.length - 1,
        });
        cardDiv.style.outline = '4px solid blue'; // Highlight the selected card
      });
    };
  };
    cardDiv.style.position = 'absolute';
    cardDiv.style.left = `${idx * 10}px`;

    wasteDiv.appendChild(cardDiv);
  });

  if (!isInitialized) {
    isInitialized = true;

    remainDiv.addEventListener('click', () => {
      //console.log("registered a click in remaining")
      if (remainingPile.length === 0) {
        // Recycle waste pile into remaining pile
        remainingPile.push(...wastePile.reverse().map(card => {
          card.isFaceUp = false;
          return card;
        }));
        wastePile.length = 0;
      } else {
        const drawn = remainingPile.splice(-3);
        drawn.forEach(card => card.isFaceUp = false);
        if (drawn.length > 0) drawn[drawn.length - 1].isFaceUp = true;
        wastePile.push(...drawn);
      }

      displayRemainingAndWasteCards(remainingPile, wastePile);
    });
  }
}