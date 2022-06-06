var altezza = 333;
var unit = 30;
var funzione;
var x_t;
var volte_tangenti = 8;

// constant
const e = Math.E, pi = Math.PI;

// elementary function
const sin = (arg) => {return Math.sin(arg);}
const sinh = (arg) => {return Math.sinh(arg);}
const arcsin = (arg) => {return Math.asin(arg);}
const arcsinh = (arg) => {return Math.asinh(arg);}

const cos = (arg) => {return Math.cos(arg);}
const cosh = (arg) => {return Math.cosh(arg);}
const arccos = (arg) => {return Math.acos(arg);}
const arccosh = (arg) => {return Math.acosh(arg);}

const tan = (arg) => {return Math.tan(arg);}
const tanh = (arg) => {return Math.tanh(arg);}
const arctan = (arg) => {return Math.atan(arg);}
const arctanh = (arg) => {return Math.atanh(arg);}

const ln = (arg) => {return Math.log(arg);}
const log = (arg) => {return Math.log10(arg);}

// canvas setup
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth - 4;
canvas.height = altezza;

// open the setting dialog window
function open_dialog () {
    document.getElementById("dialog_height").value = altezza;
    document.getElementById("dialog_unit").value = unit;
    document.getElementById("dialog_tan").value = volte_tangenti;

    document.getElementById("dialog").showModal();
}

//close the setting dialog window and update value
function close_dialog(arg) {
    altezza = arg.dialog_height.value;
    unit = arg.dialog_unit.value;
    volte_tangenti = arg.dialog_tan.value;

    document.getElementById("dialog").close();

    canvas.height = altezza;

    c.fillStyle = "rgba(255, 255, 255, 1)";
    c.fillRect(0, 0, canvas.width, canvas.height);

    grid();
    disegna_funzione();
    tangenti();
}

// take value from the form and display them
function calculate(arg) {
    funzione = arg.funzione.value;
    x_t = arg.x_t.value;

    c.fillStyle = "rgba(255, 255, 255, 1)";
    c.fillRect(0, 0, canvas.width, canvas.height);

    grid();
    disegna_funzione();
    tangenti();
}

function grid() {
    var volte_x = canvas.width / 2 * 30;
    var volte_y = canvas.height / 2 * 30;

    c.strokeStyle = "rgba(0, 0, 0, 0.2)";

    // y parallel grid line
    for (i = 0; i < volte_y; i++) {
        c.beginPath();
        c.lineTo(canvas.width / 2 + unit * i, canvas.height);
        c.lineTo(canvas.width / 2 + unit * i, 0);
        c.stroke();

        c.beginPath();
        c.lineTo(canvas.width / 2 - unit * i, canvas.height);
        c.lineTo(canvas.width / 2 - unit * i, 0);
        c.stroke();
    }

    // x parallel grid line
    for (j = 0; j < volte_x; j++) {
        c.beginPath();
        c.lineTo(0, canvas.height / 2 + unit * j);
        c.lineTo(canvas.width, canvas.height / 2 + unit * j);
        c.stroke();

        c.beginPath();
        c.lineTo(0, canvas.height / 2 - unit * j);
        c.lineTo(canvas.width, canvas.height / 2 - unit * j);
        c.stroke();
    }

    c.fillStyle = "rgba(0, 0, 0, 1)";
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

    // axes index
    c.strokeText("y", canvas.width / 2 - 15, 10);
    c.strokeText("x", canvas.width - 10, canvas.height / 2 - 10);
    c.strokeText("0", canvas.width / 2 - 12, canvas.height / 2 + 12);
}

function disegna_funzione() {
    c.strokeStyle = "rgba(0, 255, 0, 1)";
    c.beginPath();

    for (i = -canvas.width / 2; i <= canvas.width / 2; i++) {
        x = i / unit;
        y = eval(funzione);

        c.lineTo(i + canvas.width / 2, -1 * unit * y + canvas.height / 2);
    }

    c.stroke();
}

function tangenti() {
    var copia_x_t = eval(x_t);

    for (i = 0; i < volte_tangenti; i++) {
        // calculate component for tangent
        x = copia_x_t;
        var y_t = eval(funzione);

        x = copia_x_t - 0.1;
        var y_a = eval(funzione);

        x = copia_x_t + 0.1;
        var y_b = eval(funzione);

        var m = (y_b - y_a) / 0.2;

        var tangente = "m * x - m * copia_x_t + y_t";

        var x_0, y_0, x_m;

        // draw the tangent
        c.strokeStyle = 'rgba(0, 0, 255, 1)';
        c.beginPath();

        for (j = -canvas.width / 2; j <= canvas.width / 2; j++) {
            x = j / unit;
            y = eval(tangente);
            c.lineTo(j + canvas.width / 2, -1 * y * unit + canvas.height / 2);

            // check if y_n and y_n-1 have opposite sign, if yes there is a 0
            // calculate the intermediate x (x_m) between x_n (x) and x_n-1
            if (y > 0 && y_0 < 0 || y < 0 && y_0 > 0) {
                x_m = (x + x_0) / 2;

                x = x_m; // just to calculate the y_m
                y_m = eval(funzione);
                y_m_t = eval(tangente);
            }

            x_0 = x;
            y_0 = y;
        }

        copia_x_t = x_m;

        c.stroke();
    }

    c.fillStyle = "rgba(235, 0, 0, 1)";
    c.fillRect(x_m * unit + canvas.width / 2 - 2, y_m_t * unit + canvas.height / 2 - 2, 4 ,4);
    document.getElementById("resoult").innerHTML = `<p>x : ${x_m}, y : ${y_m}</p>`;
}

grid();