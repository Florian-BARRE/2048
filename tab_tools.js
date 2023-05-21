function getTable() {
    var t = document.getElementById('myTable');
    return t
}

function getCell(i, j) {
    var myTable = getTable();
    return myTable.rows[i].cells[j];
}

function getValue(i, j) {
    return parseInt(getCell(i, j).innerHTML);
}

function setValue(i, j, val) {
    var cell = getCell(i, j);
    cell.innerHTML = val;
}

function showRow(i) {
    var row_string = "";
    for (var j = 0; j < ROW_SIZE; j++) {
        row_string += getValue(i, j) + " ";
    }
    console.log(row_string);
}

function showCol(j) {
    var col_string = "";
    for (var i = 0; i < COL_SIZE; i++) {
        col_string += getValue(i, j) + " ";
    }
    console.log(col_string);
}

function setRow(i, a, b, c, d) {
    // Ne fonctionne que pour tableau 4x4
    setValue(i, 0, a);
    setValue(i, 1, b);
    setValue(i, 2, c);
    setValue(i, 3, d);
}

function setCol(j, a, b, c, d) {
    // Ne fonctionne que pour tableau 4x4
    setValue(0, j, a);
    setValue(1, j, b);
    setValue(2, j, c);
    setValue(3, j, d);
}


function isEmpty(i, j) {
    // Utilisation de getCell et non getValue car getValue transforme le texte en nombre
    // or par défaut le texte d'une case est '*', donc si on utilise getValue '*' va être convertit
    // en entier ce qui donne nan (valuer null) on ne peut donc pas savoir si il s'agit de '*' ou
    // d'une autre lettre ou symbole
    var cell = getCell(i, j);
    if (cell.innerHTML == "*") {
        return true;
    }
    else {
        return false;
    }
}


function hasEmpty() {
    var empty = 0;

    for (let i = 0; i < COL_SIZE; i++) {
        for (let j = 0; j < ROW_SIZE; j++) {
            if (isEmpty(i, j)) empty = 1;
        }
    }
    return empty;
}

function getEmpty() {
    i = -1; j = -1; // retourne -1 -1 si aucunes cases n'est vide
    if (hasEmpty()) {
        while ((i == -1 && j == -1) || !isEmpty(i, j)) {
            i = getRandomInt(0, COL_SIZE-1);
            j = getRandomInt(0, ROW_SIZE-1);
        }
    }
    return [i, j];
}
