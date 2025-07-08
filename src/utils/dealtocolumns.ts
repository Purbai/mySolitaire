import {  Card } from "../card_data/card_data";

export function dealToColumns(deck: Card[]): Card[][] {
    const columns: Card[][] = [[], [], [], [], [], [], []]; // array for each column - 7 cols
    let deckIndex = 0;
  
    for (let col = 0; col < 7; col++) {
      for (let row = 0; row <= col; row++) {
        const card = deck[deckIndex++];
        card.isFaceUp = row === col; // top card in each column is face up
        columns[col].push(card);
        // const dealtCards = document.createElement("div")
        // // dealtCards.textContent = values;

      }
    }
  
    return columns;
  }
