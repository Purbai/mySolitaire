import { remainingPile, wastePile } from "../../state/gameState";

export const drawFromRemaining = () => {
    if (wastePile.length > 0) {
        wastePile[wastePile.length - 1].isFaceUp = false;
    }

    const drawn = remainingPile.splice(-3);
    drawn.forEach((card) => (card.isFaceUp = false));

    if (drawn.length > 0) {
        drawn[drawn.length - 1].isFaceUp = true;
        wastePile.push(...drawn);
    } else {
        if (wastePile.length > 0) {
            wastePile[wastePile.length - 1].isFaceUp = true;
        }
    }
};
