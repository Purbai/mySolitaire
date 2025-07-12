export const clearBoard = () => {
  const columnsContainer = document.querySelector("#columns");
  const wastePileContainer = document.querySelector("#waste-pile");
  const remainingPileContainer = document.querySelector("#remaining-pile");
  const foundationsContainer = document.querySelector("#foundations");

  if (columnsContainer) columnsContainer.innerHTML = "";
  if (wastePileContainer) wastePileContainer.innerHTML = "";
  if (remainingPileContainer) remainingPileContainer.innerHTML = "";
  if (foundationsContainer) foundationsContainer.innerHTML = "";
};
