import { getCardsToCol, getSelectedCard } from "../../state/solitaireStates";
import { refreshDisplay } from "./refreshDisplay";
import { moveCardsToEmptyPile } from "./moveCardsToEmptyPile";
import { displayRemainingAndWasteCards } from "../../displayRemainingAndWasteCards";

export const addEmptyPileClickListener = (
  pile: Element,
  colIndex: number
) => {
  pile.addEventListener("click", () => {
    const cardstoCol = getCardsToCol();
    const selected = getSelectedCard();
    // console.log(selected,cardstoCol, colIndex)
    if (!selected || cardstoCol[colIndex].length !== 0) return;

    if (selected.card.label === "K") {
      moveCardsToEmptyPile(selected, colIndex);
      refreshDisplay();
      displayRemainingAndWasteCards(); // add this to reset the waste pile to have face-up top card
    } else {
      alert("Only Kings can be moved to empty columns.");
    }
  });
};
