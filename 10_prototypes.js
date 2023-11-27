console.log(`10-prototypes`);

// 1) каждый объект имеет прототип, который берется от родительского объекта, из которого был создан
// __proto__ - в ES6 указывает на прототип родительского (в JS только прототипорованное наследование)
// Object.getPrototypeOf() - в ES5

// 2) св-во прототип у функций, для передачи свойств объектам созданным через new
// 

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

//Расширим функционал этого класса через prototype
Cat.prototype.voice = function() {
  console.log(`Cat ${this.name} says Meow`);
}

const cat = new Cat('Pushok', 'black');

cat.voice();

console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto__); //=== Cat.prototype
console.log(cat.constructor);

//============== Собственные свойства объекта и св-ва из прототипа

function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Ivan';

console.log('skin' in person);  //Есть ли св-во в person? true Проверяет и объект, и прототип
console.log(person.legs);
console.log(person.name);

console.log(person.hasOwnProperty('name')); //true
console.log(person.hasOwnProperty('skin')); //false

// Object.create - создать объект с использованием прототипа
const proto = {year: 1990};
const myYear = Object.create(proto);

proto.year = 2001;  //если меняем свойство в прототипе, то в myYear оно тоже изменится!

console.log(myYear.year);
console.log(myYear.hasOwnProperty('year')); //false
console.log(myYear.__proto__ === proto);    //true


//__proto__ это setter/getter и находится в прототипе
const a = {x: 1};

console.log(a.__proto__ === Object.prototype); //true
console.log(a.hasOwnProperty('x')); //true

console.log(a.hasOwnProperty('__proto__')); //false в самом объекте есть только [[Prototype]]
console.log(a.__proto__.hasOwnProperty('__proto__')); //true __proto__ это setter/getter и находится в прототипе

