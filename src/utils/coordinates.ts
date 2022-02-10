export const rounded = (num: number | undefined) => {
    if (num) {
        if (num > 1000000000) {
            return Math.round(num / 100000000) / 10 + 'Bn';
        } else if (num > 1000000) {
            return Math.round(num / 100000) / 10 + 'M';
        } else {
            return Math.round(num / 100) / 10 + 'K';
        }
    }
};

export const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';
