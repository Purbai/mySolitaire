import { Card } from "../card_data/card_data";

export let remainingPile: Card[] = [];
export let wastePile: Card[] = [];

export const setRemainingPile = (pile: Card[]) => {
  remainingPile = pile;
};

export const setWastePile = (pile: Card[]) => {
  wastePile = pile;
};

