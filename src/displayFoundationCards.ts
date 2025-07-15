
import { SUITS } from "./card_data/card_data";
import { renderFoundationPile } from "./utils/foundation/renderFoundationPile";
import { handleFoundationClick } from "./utils/foundation/handleFoundationClick";
import { foundations } from "./state/foundationStates";

export function displayFoundationCards() {


  for (const suit in SUITS) {
    const foundationPile = document.querySelector(
      `.game__foundation-pile--${suit.toLowerCase()}`
    ) as HTMLElement;

    if (!foundationPile) continue;

    const stack = foundations[suit];
    const topCard = stack[stack.length - 1];

    renderFoundationPile(suit, topCard, foundationPile);
    handleFoundationClick(suit, foundationPile);
  }
}
