const COLORS = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
};

export const decodedValue = (resistorColors) => {
    const [color0, color1] =  resistorColors;
    return COLORS[color1] + 10 * COLORS[color0];
};
