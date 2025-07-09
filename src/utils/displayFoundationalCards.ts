import { Card } from "../card_data/card_data";
import { displayColumnCards } from "./displayColumnCards";
import { getSelectedCard, setSelectedCard } from './cardState';
import { getCardsToCol } from './cardState';

const foundations: Record<string, Card[]> = {
  Hearts: [],
  Diamonds: [],
  Clubs: [],
  Spades: [],
};

export let selectedCard: {
    card: Card;
    fromCol: number;
    cardIndex: number;
  } | null = null;

export function displayFoundationCards() {
  const cards = getCardsToCol();
  const foundationContainer = document.getElementById('foundationRows');
  if (!foundationContainer) return;

  foundationContainer.innerHTML = ''; // Clear old

  for (const suit in foundations) {
    const stack = foundations[suit];
    const col = document.createElement('div');
    col.classList.add("foundation__pile");

    const topCard = stack[stack.length - 1];
    //col.textContent = topCard ? topCard.toString() : suit;
    if (topCard) {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      cardDiv.textContent = topCard.toString();
      cardDiv.style.color = topCard.colour === 'Red' ? 'red' : 'black';
      col.appendChild(cardDiv);
    } else {
      col.textContent = suit;
    }
    col.dataset.suit = suit;
    // Drop handler
    col.addEventListener('click', () => {
      console.log("Clicked suit:", col.dataset.suit);
        const selectedCard = getSelectedCard();
      if (!selectedCard) return;
      const { card, fromCol, cardIndex } = selectedCard;

      // Can only move a single face-up card
      if (!card.isFaceUp || cardIndex !== cards[fromCol].length - 1) {
        alert('Only the top face-up card can be moved to the foundation.');
        setSelectedCard(null);
        displayColumnCards(cards);
        return;
      }

      const targetStack = foundations[suit];

      // Validate: must match suit, must be in sequence
      const isValid =
        (targetStack.length === 0 && card.label === 'A' && card.suit === suit) ||
        (targetStack.length > 0 &&
          card.suit === suit &&
          card.internalValue === targetStack[targetStack.length - 1].internalValue + 1);

      if (!isValid) {
        alert('Card must be next in sequence and same suit.');
        setSelectedCard(null);
        displayColumnCards(cards);
        return;
      }

      // Move the card to the foundation
      cards[fromCol].pop();
      targetStack.push(card);

      // Flip the new top card in column if needed
      const fromCards = cards[fromCol];
      if (fromCards.length > 0) {
        fromCards[fromCards.length - 1].isFaceUp = true;
      }
      setSelectedCard(null);
      displayColumnCards(cards);
      displayFoundationCards(); // refresh foundation rows
    });

    foundationContainer.appendChild(col);
  }
}

export function resetFoundations() {
  for (const suit in foundations) {
    foundations[suit] = [];
  }
}