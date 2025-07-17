import "./styles/style.scss";
import { Card } from "./card_data/card_data";
import { createDeck } from "./card_data/create_deck";
import { dealToColumns } from "./utils/dealtocolumns";
import { displaySolitaireCards } from "./displaySolitaireCards";
import { displayRemainingAndWasteCards } from "./displayRemainingAndWasteCards";
import { displayFoundationCards } from "./displayFoundationCards";
import { setCardsToCol } from "./state/cardState";
import { resetFoundations } from "./utils/foundation/resetFoundations";
import { clearBoard } from "./utils/clearBoard";
import { setRemainingPile, setWastePile } from "./state/gameState";
import { getCardsToCol } from "./state/cardState";
import { wastePile, remainingPile } from "./state/gameState";

const start = document.querySelector<HTMLButtonElement>("#start");

const isGameInProgress = (): boolean => {
    const cols = getCardsToCol();

    return (
        cols.some((col) => col.length > 0) ||
        remainingPile.length > 0 ||
        wastePile.length > 0
    );
};

const handleStartClick = () => {
    if (isGameInProgress()) {
        const confirmRestart = confirm(
            "A game is in progress. Do you want to restart anyway?"
        );
        if (!confirmRestart) return;
    }
    clearBoard();
    resetFoundations();

    const deck = createDeck(Card);
    deck.sort(() => Math.random() - 0.5);

    const cardstoCol = dealToColumns(deck);
    setCardsToCol(cardstoCol); //

    const remainingPile = [...deck];
    remainingPile.splice(0, 28); // 28 cards used to layout the solitaire columns
    let wastePile: Card[] = [];
    setRemainingPile(remainingPile);
    setWastePile(wastePile);

    displaySolitaireCards();
    displayRemainingAndWasteCards();
    displayFoundationCards();
};

if (start) {
    start.addEventListener("click", handleStartClick);
} else {
    alert("Start button not found in the DOM");
}
