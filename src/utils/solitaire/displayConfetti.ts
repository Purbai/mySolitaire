import confetti from "canvas-confetti"

export const displayConfetti = ()  =>{
    confetti({
        particleCount: 250,
        spread: 80,
        origin: { y: 0.6 },
    });
}
