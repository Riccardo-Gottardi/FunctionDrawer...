// canvas setup
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth - 5;
canvas.height = 333;

// variable
var funz;
var unit = 25;
var x, y;
funz = "x**2";

// costant
var e = Math.E, pi = Math.PI;

// elementary function
const sin = (arg) => {return Math.sin(arg);}
const cos = (arg) => {return Math.cos(arg);}
const tan = (arg) => {return Math.tan(arg);}
const ln = (arg) => {return Math.log(arg);}
const log = (arg) => {return Math.log10(arg);}