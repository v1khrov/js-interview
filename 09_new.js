console.log(`09-new`);

//класс
function Cat(color, name) {
  this.color = color;
  this.name = name;
}

//new создаёт новый инстанс класса
const cat = new Cat('black', 'Рыжик');
console.log(cat);

//собственный new
function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  return constructor.apply(obj, args) || obj;
}
const cat2 = myNew(Cat, 'white', 'Дымок');
console.log(cat2);

