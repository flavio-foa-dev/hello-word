var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valor = lines.shift().split(" ");
const a = Number(valor[0]);
const b = Number(valor[1]);
const c = Number(valor[2]);
const d = Number(valor[3]);
const e = Number(c+d);
const f = Number(a+b);
const g = Number(a%2);

if ((b>c) && (d>a) && (e>f) && (g === 0)) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
