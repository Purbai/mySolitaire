import { Card } from "../../card_data/card_data";

export const validateMove = (movingCard: Card, destTopCard: Card): boolean => {
    return (
        destTopCard &&
        destTopCard.isFaceUp &&
        destTopCard.colour !== movingCard.colour &&
        destTopCard.internalValue === movingCard.internalValue + 1
    );
};
