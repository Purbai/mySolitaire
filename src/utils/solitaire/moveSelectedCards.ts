import { Card } from "../../card_data/card_data";
import { setSelectedCard } from "../../state/cardState";

export const moveSelectedCards = (
  selected: any,
  toColIndex: number,
  cardstoCol: Card[][],
  wastePile: Card[]
) => {
  let movingCards: Card[] =
    selected.fromCol === -1
      ? [selected.card]
      : cardstoCol[selected.fromCol].splice(selected.cardIndex);

  if (selected.fromCol === -1) {
    wastePile.pop();
    if (wastePile.length > 0) {
      wastePile[wastePile.length - 1].isFaceUp = true;
    }
  }

  cardstoCol[toColIndex].push(...movingCards);

  if (selected.fromCol !== -1) {
    const fromCol = cardstoCol[selected.fromCol];
    if (fromCol.length > 0) fromCol[fromCol.length - 1].isFaceUp = true;
  }

  setSelectedCard(null);
};
