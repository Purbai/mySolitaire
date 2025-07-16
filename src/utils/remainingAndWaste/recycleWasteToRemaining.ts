import { remainingPile, wastePile } from "../../state/gameState";

export const recycleWasteToRemaining = () => {
    remainingPile.push(
        ...wastePile.reverse().map((card) => {
            card.isFaceUp = false;
            return card;
        })
    );
    wastePile.length = 0;
};
