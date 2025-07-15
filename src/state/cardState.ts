import { Card } from "../card_data/card_data";

let selectedCard: {
  card: Card;
  fromCol: number;
  cardIndex: number;
} | null = null;

let cardsToCol: Card[][] = [];

export const getSelectedCard = () => selectedCard;
export const setSelectedCard = (val: typeof selectedCard) => {
  selectedCard = val;
};

export const getCardsToCol = () => cardsToCol;
export const setCardsToCol = (val: Card[][]) => {
  cardsToCol = val;
};

export const updateCardInColumn = (colIndex: number, newCol: Card[]) => {
  cardsToCol[colIndex] = newCol;
};