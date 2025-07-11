import { Card } from "./card_data/card_data";
import { clearPiles } from "./utils/remainingAndWaste/clearPiles";
import { renderRemainingPile } from "./utils/remainingAndWaste/renderRemainingPile";
import { renderWastePile } from "./utils/remainingAndWaste/renderWastePile";
import { addRemainingPileClickListener } from "./utils/remainingAndWaste/addRemainingPileClickListener";

let isInitialized = false;

export const displayRemainingAndWasteCards = (
  remainingPile: Card[],
  wastePile: Card[]
) => {
  const remainDiv = document.querySelector(
    ".game__remaining-pile--todraw"
  ) as HTMLElement;

  const wasteDiv = document.querySelector(
    ".game__remaining-pile:not(.game__remaining-pile--todraw)"
  ) as HTMLElement;

  clearPiles(remainDiv, wasteDiv);
  renderRemainingPile(remainDiv, remainingPile);
  renderWastePile(wasteDiv, wastePile);

  if (!isInitialized) {
    addRemainingPileClickListener(remainDiv, remainingPile, wastePile);
    isInitialized = true;
  }
};
