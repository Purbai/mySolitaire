import { Card, SUITS } from "../card_data/card_data";
import { displayColumnCards } from "./displayColumnCards";
import { getSelectedCard, setSelectedCard } from './cardState';
import { getCardsToCol } from './cardState';

 const foundations: Record<string, Card[]> = {
   Hearts: [],
   Diamonds: [],
   Clubs: [],
   Spades: [],
 };

export function displayFoundationCards(wastePile: Card[], remainingPile:Card[]) {
  const cards = getCardsToCol();

  for (const suit in SUITS) {
    console.log(`.game__foundation-pile--${suit}`)
    const foundationPile = document.querySelector(`.game__foundation-pile--${suit.toLowerCase()}`) as HTMLElement;

    if (!foundationPile) continue;

    const stack = foundations[suit];

    const topCard = stack[stack.length - 1];

    foundationPile.innerHTML = ''; // Clear previous
if (topCard) {
  const cardDiv = document.createElement('div');
  cardDiv.textContent = topCard.toString();
  cardDiv.classList.add('card');
  cardDiv.style.color = topCard.colour === 'Red' ? 'red' : 'black';
  foundationPile.appendChild(cardDiv);
} else {
  foundationPile.textContent = suit;
}
    foundationPile.addEventListener('click', () => {
      const selectedCard = getSelectedCard();
      if (!selectedCard) return;

      const { card, fromCol, cardIndex } = selectedCard;

      const targetStack = foundations[suit];

      const isValid =
        (targetStack.length === 0 && card.label === 'A' && card.suit === suit) ||
        (targetStack.length > 0 &&
          card.suit === suit &&
          card.internalValue === targetStack[targetStack.length - 1].internalValue + 1);

      if (!isValid) {
        alert('Card must be next in sequence and same suit.');
        setSelectedCard(null);
        displayColumnCards(cards,wastePile,remainingPile);
        return;
      }
     
      // Check only top card can be moved
      if (fromCol !== -1 && cardIndex !== cards[fromCol].length - 1) {
        alert('Only the top face-up card can be moved to the foundation.');
        setSelectedCard(null);
        displayColumnCards(cards, wastePile, remainingPile);
        return;
      }
      if (fromCol === -1) {
        wastePile.pop();
      } else {
        cards[fromCol].pop();
        if (cards[fromCol].length > 0) {
          cards[fromCol][cards[fromCol].length -1].isFaceUp = true;
        }
      }
      targetStack.push(card);

      const fromCards = cards[fromCol];
      if (fromCards.length > 0) {
        fromCards[fromCards.length - 1].isFaceUp = true;
      }

      // add to the foundation 
      targetStack.push(card);

      setSelectedCard(null);
      displayColumnCards(cards, wastePile,remainingPile);
      displayFoundationCards(wastePile,remainingPile); 
    });
  }
}