import { Card } from "../../card_data/card_data";
import { getSelectedCard, setSelectedCard } from "../../state/cardState";
import { validateMove } from "./validMove";
import { cancelMove } from "./cancelMove";
import { refreshDisplay } from "./refreshDisplay";
import { moveSelectedCards } from "./moveSelectedCards";

export const handleCardClick = (
  card: Card,
  colIndex: number,
  cardIndex: number,
  cardDiv: HTMLDivElement,
  cardstoCol: Card[][],
  wastePile: Card[],
  remainingPile: Card[]
) => {
  const selected = getSelectedCard();

  if (!selected) {
    setSelectedCard({ card, fromCol: colIndex, cardIndex });
    cardDiv.style.outline = "4px solid blue";
    return;
  }

  const toCol = cardstoCol[colIndex];
  const isCancel = cancelMove(selected.card, toCol[toCol.length - 1]);
  if (!isCancel) 
  {
  const isValid = validateMove(selected.card, toCol[toCol.length - 1]);

  if (!isValid) {
    alert("Card must be dropped on opposite colour and one rank higher.");
    setSelectedCard(null);
    refreshDisplay(cardstoCol, wastePile, remainingPile);
    return;
  }

  }
  
  moveSelectedCards(selected, colIndex, cardstoCol, wastePile);
  refreshDisplay(cardstoCol, wastePile, remainingPile);
};
