export const clearAllPiles = () => {
    for (let i = 1; i <= 7; i++) {
        const pile = document.querySelector(`.game__solitaire-pile--${i}`);
        if (pile) {
            pile.innerHTML = "";
        }
    }
};
