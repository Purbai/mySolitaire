import { Card } from "../../card_data/card_data";

export const recycleWasteToRemaining = (
  remainingPile: Card[],
  wastePile: Card[]
) => {
  remainingPile.push(
    ...wastePile.reverse().map((card) => {
      card.isFaceUp = false;
      return card;
    })
  );
  wastePile.length = 0;
};
