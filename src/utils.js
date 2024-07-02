export const getRandomPrice = () => {
    const min = 1000;
    const max = 50000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
