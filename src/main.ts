import './style.scss'
import { SUITS, CARD_LABELS, Card, type CardLabel, type Suit } from "./card_data/card_data";
import { createDeck } from './card_data/create_deck';

const deck = createDeck(Card);

console.log(deck);