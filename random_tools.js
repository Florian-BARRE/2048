function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom2or4(percent) {
    if (percent > getRandomInt(0, 100)) {
        return 2;
    }
    else {
        return 4;
    }
}