import { recycleWasteToRemaining } from "./recycleWasteToRemaining";
import { drawFromRemaining } from "./drawFromRemaining";
import { displayRemainingAndWasteCards } from "../../displayRemainingAndWasteCards";
import { remainingPile } from "../../state/gameState";

export const addRemainingPileClickListener = (remainDiv: HTMLElement) => {
    remainDiv.addEventListener("click", () => {
        // console.log("clicked remaining pile");
        if (remainingPile.length === 0) {
            recycleWasteToRemaining();
        } else {
            drawFromRemaining();
        }

        displayRemainingAndWasteCards();
    });
};
