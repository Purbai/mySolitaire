import { remainingPile } from "../../state/gameState";

export const renderRemainingPile = (remainDiv: HTMLElement) => {
    if (remainingPile.length === 0) return;

    const remainCardDiv = document.createElement("div");
    remainCardDiv.classList.add("card", "card--facedown");
    remainDiv.appendChild(remainCardDiv);
};
