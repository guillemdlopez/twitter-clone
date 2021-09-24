export const addOpacityToColor = (color, opacity) => {
    // hexadecimal está en base 16
    const opacityHex = Math.round(opacity * 255).toString(16)

    return `${color}${opacityHex}`;
};