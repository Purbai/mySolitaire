import "./styles/style.scss";
import { Card } from "./card_data/card_data";
import { createDeck } from "./card_data/create_deck";
import { dealToColumns } from "./utils/dealtocolumns";
import { displaySolitaireCards } from "./displaySolitaireCards";
import { displayRemainingAndWasteCards } from "./displayRemainingAndWasteCards";
import { displayFoundationCards } from "./displayFoundationCards";
import { setCardsToCol } from "./state/cardState";
import { resetFoundations } from "./utils/foundation/foundations";
import { clearBoard } from "./utils/clearBoard";

const start = document.querySelector<HTMLButtonElement>("#start");

const handleStartClick = () => {
  clearBoard();
  resetFoundations();
  const deck = createDeck(Card);
  deck.sort(() => Math.random() - 0.5);

  const cardstoCol = dealToColumns(deck);
  setCardsToCol(cardstoCol); //

  const remainingPile = [...deck];
  remainingPile.splice(0, 28); // 28 cards used to layout the solitaire columns
  let wastePile: Card[] = [];
  displaySolitaireCards(cardstoCol, wastePile, remainingPile);

  displayRemainingAndWasteCards(remainingPile, wastePile);

  displayFoundationCards(wastePile, remainingPile);
};

// checking for touch on mobile
let touched = false;
const handleTouchClickStart = (e: Event) => {
  if (touched && e.type === "click") return;
  if (e.type === "touchstart") touched = true;

  handleStartClick();
};

if (start) {
  start.addEventListener("click", handleTouchClickStart);
  start.addEventListener("touchstart", handleTouchClickStart);
} else {
  alert("Start button not found in the DOM");
}

