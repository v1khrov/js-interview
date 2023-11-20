console.log(`04-Hoisting`);

//Вызов ДО определения
console.log(sum(1,41));

function sum(a,b) {
  return a+b;
}

//Вызов после определения
console.log(sum(1,41));

//Интерпритатор JS переносит объявление некоторых вещей (напр. функций) в начало файла

console.log(i); //undefined !!! var получает значение ниже, 
//                если будет const или let, то вообще будет Reference Error
var i = 40;
console.log(i);

//const и let не подвержены hoisting!!!

//Function Expression & Declaration

console.log(square(3));

function square(num) {  //- Function Declaration - можем вызывать функцию где угодно, в том числе и ДО её определения
  return num ** 2;
}

// Function expression, такую функцию мы НЕ сможем вызвать ДО её определения!!! даже если будет var cube = ...
//console.log(cube(3)); //Reference Error
const cube = function(num) {
  return num ** 3;
}