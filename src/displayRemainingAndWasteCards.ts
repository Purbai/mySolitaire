
import { clearPiles } from "./utils/remainingAndWaste/clearPiles";
import { renderRemainingPile } from "./utils/remainingAndWaste/renderRemainingPile";
import { renderWastePile } from "./utils/remainingAndWaste/renderWastePile";
import { addRemainingPileClickListener } from "./utils/remainingAndWaste/addRemainingPileClickListener";

export const displayRemainingAndWasteCards = () =>

  {
    const oldRemainDiv = document.querySelector(
      ".game__remaining-pile--todraw"
    ) as HTMLElement;

    const wasteDiv = document.querySelector(
      ".game__remaining-pile:not(.game__remaining-pile--todraw)"
    ) as HTMLElement;

    clearPiles(oldRemainDiv, wasteDiv);
    // fix to remaining pile not getting reset on game start click
    const newRemainDiv = oldRemainDiv.cloneNode(true) as HTMLElement; // refresh DOM node with no old listeners
    oldRemainDiv.replaceWith(newRemainDiv);

    renderRemainingPile(newRemainDiv);
    renderWastePile(wasteDiv);
    addRemainingPileClickListener(newRemainDiv);
  };
