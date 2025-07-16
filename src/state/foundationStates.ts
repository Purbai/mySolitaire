import { Card } from "../card_data/card_data";

export const foundations: Record<string, Card[]> = {
    Hearts: [],
    Diamonds: [],
    Clubs: [],
    Spades: [],
};

export const getFoundation = (suit: string): Card[] => {
    return foundations[suit];
};

export const getAllFoundations = (): Record<string, Card[]> => {
    return foundations;
};

export const pushToFoundation = (suit: string, card: Card) => {
    foundations[suit].push(card);
};

export const resetFoundations = () => {
    for (const suit in foundations) {
        foundations[suit] = [];
    }
};
