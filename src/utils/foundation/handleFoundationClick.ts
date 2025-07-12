import { Card } from "../../card_data/card_data";
import { isValidFoundationMove } from "./isValidFoundationMove";
import { removeCardFromSource } from "./removeCardFromSource";
import { getSelectedCard, setSelectedCard } from "../../state/cardState";
import { displayRemainingAndWasteCards } from "../../displayRemainingAndWasteCards";
import {
  displayFoundationCards,
  foundations,
} from "../../displayFoundationCards";
import { displaySolitaireCards } from "../../displaySolitaireCards";

export const handleFoundationClick = (
  suit: string,
  foundationPile: HTMLElement,
  cards: Card[][],
  wastePile: Card[],
  remainingPile: Card[]
) => {
  foundationPile.addEventListener("click", () => {
    const selectedCard = getSelectedCard();
    if (!selectedCard) return;

    const { card, fromCol, cardIndex } = selectedCard;
    const targetStack = foundations[suit];

    if (!isValidFoundationMove(card, targetStack, suit)) {
      alert("Card must be next in sequence and same suit.");
      setSelectedCard(null);
      displaySolitaireCards(cards, wastePile, remainingPile);
      return;
    }

    try {
      removeCardFromSource(cards, fromCol, cardIndex, card, wastePile);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      alert(errorMessage);
      setSelectedCard(null);
      displaySolitaireCards(cards, wastePile, remainingPile);
      return;
    }

    targetStack.push(card);
    setSelectedCard(null);
    displaySolitaireCards(cards, wastePile, remainingPile);
    displayFoundationCards(wastePile, remainingPile);
    displayRemainingAndWasteCards(remainingPile, wastePile);
  });
};
