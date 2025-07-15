import { Card } from "../../card_data/card_data";
import { wastePile } from "../../state/gameState";
import { getCardsToCol } from "../../state/cardState";

export const removeCardFromSource = (
  fromCol: number,
  cardIndex: number,
  card: Card
) => {
  const cards = getCardsToCol();
  if (fromCol === -1) {
    // from waste pile
    if (wastePile[cardIndex] === card) {
      wastePile.splice(cardIndex, 1);
    } else {
      wastePile.pop(); // fallback
    }
    if (wastePile.length > 0) {
      wastePile[wastePile.length - 1].isFaceUp = true;
    }
  } else {
    const col = cards[fromCol];
    // console.log(
    //   "inside removeCardFromSource before if ...",
    //   col,
    //   col.length,
    //   card
    // );
    if (col && col[col.length - 1] === card) {
      col.pop();
      if (col.length > 0) {
        col[col.length - 1].isFaceUp = true;
      }
    } else {
      throw new Error("Invalid move: Not the top card.");
    }
  }
};
