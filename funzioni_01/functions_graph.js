const prendi = (arg) => {
    funz = arg.funzione.value;
    draw_function(funz, unit);
}

const grid = (unit) => {

    let volte_y = Math.round((canvas.width / 2) / unit);
    let volte_x = Math.round((canvas.height / 2) / unit);

    c.strokeStyle = 'rgba(0, 0, 0, 0.1)';

    // vertical grid line
    for(let i = 1; i <= volte_y; i++){
        c.beginPath();
        c.lineTo((canvas.width / 2) + (unit * i), 0);
        c.lineTo((canvas.width / 2) + (unit * i), canvas.height);
        c.stroke();

        c.beginPath();
        c.lineTo((canvas.width / 2) - (unit * i), 0);
        c.lineTo((canvas.width / 2) - (unit * i), canvas.height);
        c.stroke();
    }
    // orizontal grid line
    for(let i = 1; i <= volte_x; i++){
        c.beginPath();
        c.lineTo(0, (canvas.height / 2) + (unit * i));
        c.lineTo(canvas.width, (canvas.height / 2) + (unit * i));
        c.stroke();

        c.beginPath();
        c.lineTo(0, (canvas.height / 2) - (unit * i));
        c.lineTo(canvas.width, (canvas.height / 2) - (unit * i));
        c.stroke();
    }

    c.strokeStyle = 'rgba(0, 0, 0, 1)';
    c.font = "8pt Verdana";

    // x axes
    c.beginPath();
    c.lineTo(canvas.width / 2, canvas.height);
    c.lineTo(canvas.width / 2, 0);
    c.stroke();
    // x arrow
    c.beginPath();
    c.lineTo(canvas.width - 5, canvas.height / 2 - 3);
    c.lineTo(canvas.width, canvas.height / 2);
    c.lineTo(canvas.width - 5, canvas.height / 2 + 3);
    c.fill();

    c.strokeText("x", canvas.width - 10, canvas.height / 2 - 10);

    // y axes
    c.beginPath();
    c.lineTo(0, canvas.height / 2);
    c.lineTo(canvas.width, canvas.height / 2);
    c.stroke();
    // y arrow
    c.beginPath();
    c.lineTo(canvas.width / 2 - 3, 5);
    c.lineTo(canvas.width / 2, 0);
    c.lineTo(canvas.width / 2 + 3, 5);
    c.fill();

    c.strokeText("y", canvas.width / 2 - 15, 10);

    c.strokeText("0", canvas.width / 2 - 12, canvas.height / 2 + 12);
}

const draw_function = (funz, unit) => {

    c.strokeStyle = 'rgba(21, 207, 70, 1)';
    c.beginPath();

    for(let j = -canvas.width / 2; j <= canvas.width / 2; j++){
        x = j / unit;
        y = -1 * eval(funz) * unit + canvas.height / 2;
        c.lineTo(j + canvas.width / 2, y);
    }

    c.stroke();
}