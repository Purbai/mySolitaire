import { Card } from "../../card_data/card_data";
import { recycleWasteToRemaining } from "./recycleWasteToRemaining";
import { drawFromRemaining } from "./drawFromRemaining";
import { displayRemainingAndWasteCards } from "../../displayRemainingAndWasteCards";

export const addRemainingPileClickListener = (
  remainDiv: HTMLElement,
  remainingPile: Card[],
  wastePile: Card[]
) => {
  remainDiv.addEventListener("click", () => {
    if (remainingPile.length === 0) {
      recycleWasteToRemaining(remainingPile, wastePile);
    } else {
      drawFromRemaining(remainingPile, wastePile);
    }

    displayRemainingAndWasteCards(remainingPile, wastePile);
  });
};
