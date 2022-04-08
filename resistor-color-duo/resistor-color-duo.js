const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const decodedValue = (resistorColors) => COLORS.indexOf(resistorColors[1]) + 10 * COLORS.indexOf(resistorColors[0]);