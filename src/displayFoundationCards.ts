import { getCardsToCol } from "./state/cardState";
import { Card,SUITS } from "./card_data/card_data";
import { renderFoundationPile } from "./utils/foundation/renderFoundationPile";
import { handleFoundationClick } from "./utils/foundation/handleFoundationClick";

export const foundations: Record<string, Card[]> = {
  Hearts: [],
  Diamonds: [],
  Clubs: [],
  Spades: [],
};

export function displayFoundationCards(
  wastePile: Card[],
  remainingPile: Card[]
) {
  const cards = getCardsToCol();

  for (const suit in SUITS) {
    const foundationPile = document.querySelector(
      `.game__foundation-pile--${suit.toLowerCase()}`
    ) as HTMLElement;

    if (!foundationPile) continue;

    const stack = foundations[suit];
    const topCard = stack[stack.length - 1];

    renderFoundationPile(suit, topCard, foundationPile);
    handleFoundationClick(
      suit,
      foundationPile,
      cards,
      wastePile,
      remainingPile
    );
  }
}
