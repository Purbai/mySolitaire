import { isValidFoundationMove } from "./isValidFoundationMove";
import { removeCardFromSource } from "./removeCardFromSource";
import {
  getCardsToCol,
  getSelectedCard,
  setSelectedCard,
} from "../../state/cardState";
import { displayRemainingAndWasteCards } from "../../displayRemainingAndWasteCards";
import { displayFoundationCards } from "../../displayFoundationCards";
import { displaySolitaireCards } from "../../displaySolitaireCards";
import { foundations } from "../../state/foundationStates";

export const handleFoundationClick = (
  suit: string,
  foundationPile: HTMLElement
) => {
  const cards = getCardsToCol();
  foundationPile.addEventListener("click", () => {
    const selectedCard = getSelectedCard();
    if (!selectedCard) return;

    const { card, fromCol, cardIndex } = selectedCard;
    const targetStack = foundations[suit];

    if (!isValidFoundationMove(card, targetStack, suit)) {
      alert("Card must be next in sequence and same suit.");
      setSelectedCard(null);
      displaySolitaireCards();
      return;
    }

    try {
      console.log(
        "before the removeCardFromSource - ",
        cards,
        fromCol,
        cardIndex,
        card
      );
      removeCardFromSource(fromCol, cardIndex, card);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      alert(errorMessage);
      setSelectedCard(null);
      displaySolitaireCards();
      return;
    }

    targetStack.push(card);
    setSelectedCard(null);
    displaySolitaireCards();
    displayFoundationCards();
    displayRemainingAndWasteCards();
  });
};
