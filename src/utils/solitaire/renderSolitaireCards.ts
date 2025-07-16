import { Card } from "../../card_data/card_data";
import { createCardElement } from "./createCardElement";
import { handleCardClick } from "./handleCardClick";
import { checkGameWin } from "./checkGameWin";

export const renderSolitaireCards = (
    pile: Element,
    column: Card[],
    colIndex: number
) => {
    column.forEach((card, index) => {
        const cardDiv = createCardElement(card, index);

        cardDiv.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!card.isFaceUp) return;

            handleCardClick(card, colIndex, index, cardDiv);
            // check to see if all cards are faced up and nothing in the remaining/waste pile - then auto move to foundation piles
            checkGameWin();
        });
        pile.appendChild(cardDiv);
    });
};
