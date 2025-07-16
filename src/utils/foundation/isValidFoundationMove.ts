import { Card } from "../../card_data/card_data";

export const isValidFoundationMove = (
    card: Card,
    targetStack: Card[],
    suit: string
): boolean => {
    return (
        (targetStack.length === 0 &&
            card.label === "A" &&
            card.suit === suit) ||
        (targetStack.length > 0 &&
            card.suit === suit &&
            card.internalValue ===
                targetStack[targetStack.length - 1].internalValue + 1)
    );
};
