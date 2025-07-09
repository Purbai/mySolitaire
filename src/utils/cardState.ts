import type { Card } from "../card_data/card_data";

export let selectedCard: {
  card: Card;
  fromCol: number;
  cardIndex: number;
} | null = null;

export function setSelectedCard(value: typeof selectedCard) {
  selectedCard = value;
}

export function getSelectedCard() {
  return selectedCard;
}