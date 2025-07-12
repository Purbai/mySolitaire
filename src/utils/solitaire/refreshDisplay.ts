import { Card } from "../../card_data/card_data";
import { displaySolitaireCards } from "../../displaySolitaireCards";
import { displayRemainingAndWasteCards } from "../../displayRemainingAndWasteCards";

export const refreshDisplay = (
  cardstoCol: Card[][],
  wastePile: Card[],
  remainingPile: Card[]
) => {
  displaySolitaireCards(cardstoCol, wastePile, remainingPile);
  displayRemainingAndWasteCards(remainingPile, wastePile);
};
