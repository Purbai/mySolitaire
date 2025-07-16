import {
    SUITS,
    CARD_LABELS,
    Card,
    type CardLabel,
    type Suit,
} from "./card_data";

export const createDeck = (
    CardClass: new (suit: Suit, label: CardLabel, isFaceUp?: boolean) => Card
): Card[] => {
    const deck: Card[] = [];
    // for each suit, create the cards and push to array deck
    const suitKeys = Object.keys(SUITS) as Suit[];
    for (const suit of suitKeys) {
        for (const label of CARD_LABELS) {
            deck.push(new CardClass(suit, label, true));
        }
    }

    return deck;
};
