console.log(`08-context`);

//Контекст - определяет как функция как была вызвана, указывает на this
const person = {
  surname: 'Stark',
  knows: function (what, name) {
    console.log(`You ${what} know, ${name} ${this.surname}`); //Таким образом мы из одного поля объекта можем получить другое через this
  }
}

const john = { surname: 'Snow' }

person.knows('all', "Bran");

//Вызовем метод knows в контексте объекта john
person.knows.call(john, 'nothing', 'John');
person.knows.apply(john, ['nothing', 'John']);
person.knows.call(john, ...['nothing', 'John']);    //ES6

//bing не вызывает функцию, а возвращает новую
const bound = person.knows.bind(john, 'nothing', 'John');
bound();

// =========
//класс через функцию
function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

const igor = new Person('Igor', 33);

// Явный Binding (явная привязка контекста)
function logThis() {
  console.log(this)
}

const obj = {num: 42}

logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();

// НЕявный
const animal = {
  legs: 4,
  logThis: function() {
    console.log(this);
  }
}

animal.logThis();

//==== Стрелочные функции ======
// Стрелочные функции отличаются от обычных не только способом записи. 
// Главное их отличие проявляется в том, как они работают с контекстом. 
// Вкратце: контекст обычных функций зависит от места вызова, 
// а контекст стрелочных функций — от того места, где они были определены.
// не имеет arguments, не может быть конструктором
function Cat(color) {
  this.color = color;
  console.log('This', this);

  (() => console.log(`Arrow this`, this))();    //Не создаёт своего контекста

}

new Cat('grey');