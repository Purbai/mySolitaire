import { foundations } from "../../state/foundationStates";
import { isValidFoundationMove } from "./isValidFoundationMove";
import { getCardsToCol } from "../../state/cardState";

export const autoMoveToFoundation = () => {
  let moved = false;
  const cardstoCol = getCardsToCol();
  do {
    moved = false;

    for (let colIndex = 0; colIndex < cardstoCol.length; colIndex++) {
      const col = cardstoCol[colIndex];
      if (col.length === 0) continue;

      const topCard = col[col.length - 1];
      const suit = topCard.suit;
      const foundation = foundations[suit];

      if (
        topCard.isFaceUp &&
        isValidFoundationMove(topCard, foundation, suit)
      ) {
        foundation.push(topCard);
        col.pop();
        moved = true;
        break; // check for other moves
      }
    }
  } while (moved);
};
