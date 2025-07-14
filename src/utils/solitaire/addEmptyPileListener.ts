import { Card } from "../../card_data/card_data";
import { getSelectedCard} from "../../state/cardState";
import { refreshDisplay } from "./refreshDisplay";
import { moveCardsToEmptyPile } from "./moveCardsToEmptyPile";
import { displayRemainingAndWasteCards } from "../../displayRemainingAndWasteCards";

export const addEmptyPileClickListener = (
  pile: Element,
  colIndex: number,
  cardstoCol: Card[][],
  wastePile: Card[],
  remainingPile: Card[]
) => {
  pile.addEventListener("click", () => {
    const selected = getSelectedCard();
    console.log(selected,cardstoCol, colIndex)
    if (!selected || cardstoCol[colIndex].length !== 0) return;

    if (selected.card.label === "K") {
      moveCardsToEmptyPile(selected, colIndex, cardstoCol, wastePile);
      refreshDisplay(cardstoCol, wastePile, remainingPile);
      displayRemainingAndWasteCards(remainingPile,wastePile)  // add this to reset the waste pile to have face-up top card
    } else {
      alert("Only Kings can be moved to empty columns.");
    }
  });
};
