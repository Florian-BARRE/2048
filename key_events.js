document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if(!END_GAME){
        if (e.keyCode === 38) {
            if (next_move(upall())) CURRENT_SCORE++;
        }

        else if (e.keyCode === 40) {
            if (next_move(downall())) CURRENT_SCORE++;
        }

        else if (e.keyCode === 37) {
            if (next_move(leftall())) CURRENT_SCORE++;
        }

        else if (e.keyCode === 39) {
            if (next_move(rightall())) CURRENT_SCORE++;
        }
        update_score();
    }
})

function update_score() {
    var texte = document.getElementById("total");
    texte.innerHTML = CURRENT_SCORE;
}