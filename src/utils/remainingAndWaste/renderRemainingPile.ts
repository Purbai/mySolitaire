import { Card } from "../../card_data/card_data";

export const renderRemainingPile = (
  remainDiv: HTMLElement,
  remainingPile: Card[]
) => {
  if (remainingPile.length === 0) return;

  const remainCardDiv = document.createElement("div");
  remainCardDiv.classList.add("card", "card--facedown");
  remainDiv.appendChild(remainCardDiv);
};
