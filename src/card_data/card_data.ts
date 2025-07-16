export const SUITS = {
    Hearts: "Hearts",
    Diamonds: "Diamonds",
    Clubs: "Clubs",
    Spades: "Spades",
} as const;

export type Suit = keyof typeof SUITS; // suit is one of {Hearts, Diamonds, Clubs or Spades} (from SUITS)

export const COLOUR = {
    Red: "Red",
    Black: "Black",
} as const;

type Colour = keyof typeof COLOUR;

export type CardLabel =
    | "A"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "J"
    | "Q"
    | "K"; // must be on of these

export const CARD_LABELS: CardLabel[] = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
];

export const CardValueMap: Record<CardLabel, number> = {
    A: 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
};

// build a template for the card
export class Card {
    suit: Suit;
    label: CardLabel;
    internalValue: number;
    colour: Colour;
    isFaceUp: boolean = false;

    constructor(suit: Suit, label: CardLabel, isFaceUp: boolean = false) {
        this.suit = suit;
        this.label = label;
        this.internalValue = CardValueMap[label];
        this.colour =
            suit === SUITS.Hearts || suit === SUITS.Diamonds
                ? COLOUR.Red
                : COLOUR.Black;
        this.isFaceUp = isFaceUp;
    }
    toString(): string {
        const suitSymbols: Record<Suit, string> = {
            Hearts: "♥",
            Diamonds: "♦",
            Clubs: "♣",
            Spades: "♠",
        };

        return `${this.label}${suitSymbols[this.suit]}${
            this.isFaceUp ? "" : " (face down)"
        }`;
    }
}
