var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for(let i = 0;  lines.length > i; i+=1 ){

  let x = Number(lines[i].split(" ")[0]);
  let y = Number(lines[i].split(" ")[1]);
  if(x <= 0 || y <= 0){break}
  if(x > y) {
    const a = x;
    x = y;
    y = a;
  }
  let sum = 0;
  let string =''
  for(let j = x; j<=y; j+=1){
    string += j + ' ';
    sum += j;
  }
  console.log(`${string}Sum=${sum}`);
}



