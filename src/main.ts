import './styles/style.scss'
import { Card} from "./card_data/card_data";
import { createDeck } from './card_data/create_deck';
import { dealToColumns } from './utils/dealtocolumns';
import { displayColumnCards } from './utils/displayColumnCards';
import { displayRemainingAndWasteCards } from './utils/displayRemainingAndWasteCards';
import { displayFoundationCards } from './utils/displayFoundationalCards';
import { setCardsToCol } from './utils/cardState';

const start = document.querySelector<HTMLButtonElement>('#start');

const handleStartClick = () => {
    const deck = createDeck(Card);
    deck.sort(() => Math.random() - 0.5);
  
    const cardstoCol = dealToColumns(deck);
    setCardsToCol(cardstoCol); // 
  
    const remainingPile = [...deck];
    remainingPile.splice(0, 28);  // 28 cards used to layout the solitaire columns
    let wastePile: Card[] = [];
    displayColumnCards(cardstoCol, wastePile, remainingPile);
  
    displayRemainingAndWasteCards(remainingPile, wastePile);

    displayFoundationCards(wastePile, remainingPile);  
  };

if (start) {
    start.addEventListener('click', handleStartClick);
  } else {
    alert('Start button not found in the DOM');
  }