import { clearAllPiles } from "./utils/solitaire/clearAllPiles";
import { addEmptyPileClickListener } from "./utils/solitaire/addEmptyPileListener";
import { renderSolitaireCards } from "./utils/solitaire/renderSolitaireCards";
import { getCardsToCol } from "./state/cardState";

export const displaySolitaireCards = () => {
    clearAllPiles();
    const cardstoCol = getCardsToCol();

    cardstoCol.forEach((column, colIndex) => {
        const pile = document.querySelector(
            `.game__solitaire-pile--${colIndex + 1}`
        );
        if (!pile) return;

        addEmptyPileClickListener(pile, colIndex);
        renderSolitaireCards(pile, column, colIndex);
    });
};
