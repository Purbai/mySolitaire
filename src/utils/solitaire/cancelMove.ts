import { Card } from "../../card_data/card_data";

export const cancelMove = (movingCard: Card, destTopCard: Card): boolean => {
    return (
        // clicking on the same card/colum
        destTopCard &&
        destTopCard.internalValue == movingCard.internalValue &&
        destTopCard.colour == movingCard.colour &&
        destTopCard.isFaceUp == movingCard.isFaceUp
    );
};
