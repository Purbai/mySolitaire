import './style.scss'
import { SUITS, CARD_LABELS, Card, type CardLabel, type Suit } from "./card_data/card_data";
import { createDeck } from './card_data/create_deck';
import { dealToColumns } from './utils/dealtocolumns';

const start = document.querySelector<HTMLButtonElement>('#start');

const handleStartClick = () => {
    const deck = createDeck(Card);
    deck.sort(() => Math.random() - 0.5);
  
    const cardstoCol = dealToColumns(deck);
    console.log(cardstoCol);
  
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
  };

if (start) {
    start.addEventListener('click', handleStartClick);
  } else {
    alert('Start button not found in the DOM');
  }