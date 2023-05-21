// RIGHT action
function moveRight(i) {
    var index = ROW_SIZE - 1;
    var hasMoved = 0;

    for (var j = ROW_SIZE - 1; j >= 0; j--) {
        if (!isEmpty(i, j)) {
            var case_value = getValue(i, j);
            if (j != index) {
                setValue(i, index, case_value);
                setValue(i, j, "*");
                hasMoved = 1;
            }
            index--;
        }
    }
    return hasMoved;
}

function fusionRight(i) {
    var hasMoved = 0;

    for (var j = ROW_SIZE - 1; j > 0; j--) {
        if (!isEmpty(i, j) && !isEmpty(i, j - 1)) {
            var cell_n = getValue(i, j);
            var cell_n1 = getValue(i, j - 1);

            if (cell_n == cell_n1) {
                setValue(i, j, cell_n + cell_n1);
                setValue(i, j - 1, "*");
                hasMoved = 1;
            }
        }
    }
    return hasMoved;
}

function right(i) {
    var hasChanged = 0;
    hasChanged = moveRight(i) + fusionRight(i) + moveRight(i);
    if (hasChanged != 0) hasChanged = 1;
    return hasChanged;
}

function rightall() {
    var hasChanged = 0;
    for (let i = 0; i < COL_SIZE; i++) {
        hasChanged = hasChanged + right(i);
    }
    if (hasChanged != 0) hasChanged = 1;
    else console.log("pas de mouvement et pas de fusion");
    return hasChanged;
}
// LEFT action
function moveLeft(i) {
    var index = 0;
    var hasMoved = 0;

    for (var j = 0; j < ROW_SIZE; j++) {
        if (!isEmpty(i, j)) {
            var case_value = getValue(i, j);
            if (j != index) {
                setValue(i, index, case_value);
                setValue(i, j, "*");
                hasMoved = 1;
            }
            index++;
        }
    }
    return hasMoved;
}

function fusionLeft(i) {
    var hasMoved = 0;

    // Décale les élément à doite
    for (var j = 0; j < ROW_SIZE - 1; j++) {
        // Si 2 cases consécutives sont non nulles on regarde leur valeur
        if (!isEmpty(i, j) && !isEmpty(i, j + 1)) {
            var cell_n = getValue(i, j);
            var cell_n1 = getValue(i, j + 1);

            if (cell_n == cell_n1) {
                setValue(i, j, cell_n + cell_n1);
                setValue(i, j + 1, "*");
                hasMoved = 1;
            }
        }
    }
    return hasMoved;
}

function left(i) {
    var hasChanged = 0;
    hasChanged = moveLeft(i) + fusionLeft(i) + moveLeft(i);
    if (hasChanged != 0) hasChanged = 1;
    return hasChanged;
}

function leftall() {
    var hasChanged = 0;
    for (let i = 0; i < COL_SIZE; i++) {
        hasChanged = hasChanged + left(i);
    }
    if (hasChanged != 0) hasChanged = 1;
    else console.log("pas de mouvement et pas de fusion");
    return hasChanged;
}
// UP action
function moveUp(j) {
    var COL_SIZE = 4;
    var index = 0;
    var hasMoved = 0;

    for (var i = 0; i < COL_SIZE; i++) {
        if (!isEmpty(i, j)) {
            var case_value = getValue(i, j);
            if (i != index) {
                setValue(index, j, case_value);
                setValue(i, j, "*");
                hasMoved = 1;
            }
            index++;
        }
    }
    return hasMoved;
}

function fusionUp(j) {
    var COL_SIZE = 4;
    var hasMoved = 0;

    for (var i = 0; i < COL_SIZE - 1; i++) {
        if (!isEmpty(i, j) && !isEmpty(i + 1, j)) {
            var cell_n = getValue(i, j);
            var cell_n1 = getValue(i + 1, j);

            if (cell_n == cell_n1) {
                setValue(i, j, cell_n + cell_n1);
                setValue(i + 1, j, "*");
                hasMoved = 1;
            }
        }
    }
    return hasMoved;
}

function up(j) {
    var hasChanged = 0;
    hasChanged = moveUp(j) + fusionUp(j) + moveUp(j);
    if (hasChanged != 0) hasChanged = 1;
    return hasChanged;
}

function upall() {
    var hasChanged = 0;
    for (let j = 0; j < ROW_SIZE; j++) {
        hasChanged = hasChanged + up(j);
    }
    if (hasChanged != 0) hasChanged = 1;
    else console.log("pas de mouvement et pas de fusion");
    return hasChanged;
}

// DOWN action
function moveDown(j) {
    var index = COL_SIZE - 1;
    var hasMoved = 0;

    for (var i = COL_SIZE - 1; i >= 0; i--) {
        if (!isEmpty(i, j)) {
            var case_value = getValue(i, j);
            if (i != index) {
                setValue(index, j, case_value);
                setValue(i, j, "*");
                hasMoved = 1;
            }
            index--;
        }
    }
    return hasMoved;
}

function fusionDown(j) {
    var hasMoved = 0;

    for (var i = COL_SIZE - 1; i > 0; i--) {
        if (!isEmpty(i, j) && !isEmpty(i - 1, j)) {
            var cell_n = getValue(i, j);
            var cell_n1 = getValue(i - 1, j);

            if (cell_n == cell_n1) {
                setValue(i, j, cell_n + cell_n1);
                setValue(i - 1, j, "*");
                hasMoved = 1;
            }
        }
    }
    return hasMoved;
}

function down(j) {
    var hasChanged = 0;
    hasChanged = moveDown(j) + fusionDown(j) + moveDown(j);
    if (hasChanged != 0) hasChanged = 1;
    return hasChanged;
}

function downall() {
    var hasChanged = 0;
    for (let j = 0; j < ROW_SIZE; j++) {
        hasChanged = hasChanged + down(j);
    }
    if (hasChanged != 0) hasChanged = 1;
    else console.log("pas de mouvement et pas de fusion");
    return hasChanged;
}