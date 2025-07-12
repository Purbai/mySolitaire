import { Card } from "../../card_data/card_data";
export const foundations: Record<string, Card[]> = {
  Hearts: [],
  Diamonds: [],
  Clubs: [],
  Spades: [],
};

export const resetFoundations = () => {
  for (const suit in foundations) {
    foundations[suit] = [];
  }
}
