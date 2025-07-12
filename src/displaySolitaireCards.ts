import { Card } from "./card_data/card_data";
import { clearAllPiles } from "./utils/solitaire/clearAllPiles";
import { addEmptyPileClickListener } from "./utils/solitaire/addEmptyPileListener";
import { renderSolitaireCards } from "./utils/solitaire/renderSolitaireCards";

export const displaySolitaireCards = (
  cardstoCol: Card[][],
  wastePile: Card[],
  remainingPile: Card[]
) => {
  clearAllPiles();

  cardstoCol.forEach((column, colIndex) => {
    const pile = document.querySelector(
      `.game__solitaire-pile--${colIndex + 1}`
    );
    if (!pile) return;

    addEmptyPileClickListener(
      pile,
      colIndex,
      cardstoCol,
      wastePile,
      remainingPile
    );
    renderSolitaireCards(
      pile,
      column,
      colIndex,
      cardstoCol,
      wastePile,
      remainingPile
    );
  });
};
