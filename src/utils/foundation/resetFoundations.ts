import { foundations } from "../../state/foundationStates";

export const resetFoundations = () => {
    for (const suit in foundations) {
        foundations[suit] = [];
    }
};
