// Immediate Invoked Function Expression
console.log(`07-Immediat Invoked Function Expression`);

//Моментально выполняющийся Function Expression
let result = [];
// for(var i = 0; i < 5; i++) {
//   result.push( function() {
//     console.log(i);
//   } )
// }
// result[2]();
// result[4]();
//Результат будет всегда 5 из-за var

for (var i = 0; i < 5; i++) {
  (function () {
    var j = i;    //В своём Scope мы скопировали примитивное значение i
    result.push(function () { console.log(j) });
  })()
}
result[2]();
result[4]();

for (var i = 0; i < 5; i++) {
  (() => {
    var j = i;    //В своём Scope мы скопировали примитивное значение i
    result.push(function () { console.log(j) });
  })()
}
result[2]();
result[4]();