export const clearBoard = () => {
  const columnsContainer = document.querySelector("#columns");
  const wastePileContainer = document.querySelector("#waste-pile");
  const remainingPileContainer = document.querySelector("#remaining-pile");
// reset each foundation pile
document
    .querySelectorAll(".game__foundation-pile")
    .forEach((pile) => (pile.innerHTML = ""));

  if (columnsContainer) columnsContainer.innerHTML = "";
  if (wastePileContainer) wastePileContainer.innerHTML = "";
  if (remainingPileContainer) remainingPileContainer.innerHTML = "";
};
