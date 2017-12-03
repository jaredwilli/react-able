import _ from 'underscore';
import tinycolor from 'tinycolor2';

export const darken = _.memoize((baseColor, amount) => {
    return tinycolor(baseColor)
        .darken(amount)
        .toHexString();
});
