import { getCardsToCol } from "../../state/cardState";
import { autoMoveToFoundation } from "../foundation/autoMoveToFoundation";
import { displayFoundationCards } from "../../displayFoundationCards";
import { displaySolitaireCards } from "../../displaySolitaireCards";
import { wastePile, remainingPile } from "../../state/gameState";

export const checkGameWin = () => {
    const cardstoCol = getCardsToCol();
    const allFaceUp = cardstoCol.every((col) =>
        col.every((card) => card.isFaceUp)
    );

    if (wastePile.length === 0 && remainingPile.length === 0 && allFaceUp) {
        autoMoveToFoundation();
        displayFoundationCards();
        displaySolitaireCards();
        alert("You have won the game - well done!");
    }
};
