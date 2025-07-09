import './style.scss'
import { Card} from "./card_data/card_data";
import { createDeck } from './card_data/create_deck';
import { dealToColumns } from './utils/dealtocolumns';
import { displayColumnCards } from './utils/displayColumnCards';
import { displayRemainingDrawCards } from './utils/displayRemainingDrrawCards';


const start = document.querySelector<HTMLButtonElement>('#start');

const handleStartClick = () => {
    // create the deck
    const deck = createDeck(Card);
    // sort the deck in random order
    deck.sort(() => Math.random() - 0.5);
  
    // deal cards to each of 7 columns and display on the page
    const cardstoCol = dealToColumns(deck);
    displayColumnCards(cardstoCol);
    // get the remaining cards
    const remainingCards = [...deck];
    remainingCards.splice(0,28);
    console.log(remainingCards);
    displayRemainingDrawCards(remainingCards);


  };

if (start) {
    start.addEventListener('click', handleStartClick);
  } else {
    alert('Start button not found in the DOM');
  }