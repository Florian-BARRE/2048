addEventListener('load', (event) => {
    console.log('La page est complètement chargée, vous pouvez jouer !');
    init();
    newGame();
    update_score();
})


function init() {
    var tab = [
        ["*", "*", "*", "*"],
        ["*", "*", "*", "*"],
        ["*", "*", "*", "*"],
        ["*", "*", "*", "*"]
    ];
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            setValue(i, j, tab[i][j]);
        }
    }
}

function newGame() {
    cell_1_i = getRandomInt(0, 3);
    cell_1_j = getRandomInt(0, 3);

    cell_2_i = getRandomInt(0, 3);
    cell_2_j = getRandomInt(0, 3);

    while (cell_1_i == cell_2_i && cell_1_j == cell_2_j) {
        cell_2_i = getRandomInt(0, 3);
        cell_2_j = getRandomInt(0, 3);
    }

    setValue(cell_1_i, cell_1_j, getRandom2or4(85));
    setValue(cell_2_i, cell_2_j, getRandom2or4(86));
}

function next_move(hasChanged) {
    var success = 0;
    if (hasChanged) {
        var coord = getEmpty();
        // Si il y aucune case vide
        if (coord[0] != -1 && coord[1] != -1) {
            // on rempli cette case par un 2 (85% de chance) ou 4 (15% de chance)
            setValue(coord[0], coord[1], getRandom2or4(85));
            success = 1;
        }
    }
    else if (!hasEmpty()) {
        endGame();
    }
    return success;
}

function endGame() {
    END_GAME = true;
    console.log("Perdu !", CURRENT_SCORE);
    var endGameBalise = document.getElementById("endGame");
    endGameBalise.innerHTML = "C'est la fin de la partie ! Votre score finale est de " + CURRENT_SCORE + ".";
}