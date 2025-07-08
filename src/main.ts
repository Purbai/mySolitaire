import './style.scss'
import { SUITS, CARD_LABELS, Card, type CardLabel, type Suit } from "./card_data/card_data";
import { createDeck } from './card_data/create_deck';

const start = document.querySelector<HTMLButtonElement>('#start');

const handleStartClick = () => {
    const deck = createDeck(Card);
    console.log(deck);
};

if (start) {
    start.addEventListener('click', handleStartClick);
  } else {
    alert('Start button not found in the DOM');
  }