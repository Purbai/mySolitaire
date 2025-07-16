import { getCardsToCol } from "../../state/cardState";
import { autoMoveToFoundation } from "../foundation/autoMoveToFoundation";
import { displayFoundationCards } from "../../displayFoundationCards";
import { displaySolitaireCards } from "../../displaySolitaireCards";
import { wastePile, remainingPile } from "../../state/gameState";
import { displayConfetti } from "./displayConfetti";

export const checkGameWin = () => {
    const cardstoCol = getCardsToCol();
    const allFaceUp = cardstoCol.every((col) =>
        col.every((card) => card.isFaceUp)
    );

    if (wastePile.length === 0 && remainingPile.length === 0 && allFaceUp) {
        autoMoveToFoundation(); // all cards are faced up hence automatically move the cards to foundation
        displayFoundationCards(); 
        displaySolitaireCards();
        displayConfetti();  // Game won!
    }
};

