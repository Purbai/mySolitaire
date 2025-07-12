import { Card } from "../../card_data/card_data";

export const drawFromRemaining = (remainingPile: Card[], wastePile: Card[]) => {
  if (wastePile.length > 0) {
    wastePile[wastePile.length - 1].isFaceUp = false;
  }

  const drawn = remainingPile.splice(-3);
  drawn.forEach((card) => (card.isFaceUp = false));

  if (drawn.length > 0) {
    // wastePile[wastePile.length-1].isFaceUp=false; // reset the card to face down when more cards are added to waste pile
    drawn[drawn.length - 1].isFaceUp = true;
    wastePile.push(...drawn);
  } 
  else {
    if (wastePile.length > 0) {
        wastePile[wastePile.length-1].isFaceUp = true;
    }
  }

  
};
