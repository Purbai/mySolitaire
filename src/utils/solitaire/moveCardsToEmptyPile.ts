import { Card } from "../../card_data/card_data";
import { setSelectedCard, getCardsToCol } from "../../state/cardState";
import { wastePile } from "../../state/gameState";

export const moveCardsToEmptyPile = (selected: any, toColIndex: number) => {
    const cardstoCol = getCardsToCol();
    let movingCards: Card[] =
        selected.fromCol === -1
            ? [selected.card]
            : cardstoCol[selected.fromCol].splice(selected.cardIndex);

    if (selected.fromCol === -1) wastePile.pop();

    cardstoCol[toColIndex].push(...movingCards);

    if (selected.fromCol !== -1) {
        const fromCol = cardstoCol[selected.fromCol];
        if (fromCol.length > 0) fromCol[fromCol.length - 1].isFaceUp = true;
    } else {
        // make sure that top card is always faced up
        wastePile[wastePile.length - 1].isFaceUp = true;
    }

    setSelectedCard(null);
};
