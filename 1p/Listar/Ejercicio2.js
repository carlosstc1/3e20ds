//permutaciones(S)
var p = [],
s = [];

function per(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    s.push(ch);
    if (input.length == 0) {
      p.push(s.slice());
    }
    per(input);
    input.splice(i, 0, ch);
    s.pop();
  }
  return p
};


console.log(per([3,1,4,2,3]));