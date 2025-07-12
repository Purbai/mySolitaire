import { Card } from "../../card_data/card_data";
import { createCardElement } from "./createCardElement";
import { handleCardClick } from "./handleCardClick";

export const renderSolitaireCards = (
  pile: Element,
  column: Card[],
  colIndex: number,
  cardstoCol: Card[][],
  wastePile: Card[],
  remainingPile: Card[]
) => {
  column.forEach((card, index) => {
    const cardDiv = createCardElement(card);
    cardDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!card.isFaceUp) return;

      handleCardClick(
        card,
        colIndex,
        index,
        cardDiv,
        cardstoCol,
        wastePile,
        remainingPile
      );
    });
    pile.appendChild(cardDiv);
  });
};
