const tangenti = (funz, x_t) => {

    x = x_t;
    let y_t = eval(funz);

    x = x_t - 2;
    let y_a = eval(funz);

    console.log(x_t, y_t, x, y_a);

    x = x_t + 2;
    let y_b = eval(funz);

    let m = (y_b - y_a) / 4;

    let tangente = "m * x - m * x_t + y_t";

    console.log(x, y_b, m, tangente);

    c.strokeStyle = 'rgba(0, 0, 255, 1)';
    c.beginPath()

    for(let j = -canvas.width / 2; j <= canvas.width / 2; j++){

        x = j / unit;
        y = -1 * eval(tangente) * unit + canvas.height / 2;

        c.lineTo(j + canvas.width / 2, y);
    }

    c.stroke()
}

const le_tangenti = (funz) => {
    var x_le_t = 2;
    for (let i = 0; i < 3; i++) {
        tangenti(funz, x_le_t);
        x_le_t--;
    }
}