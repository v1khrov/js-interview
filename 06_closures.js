console.log(`06-closures`);

//Замыкания - момент, когда функция имеет доступ к переменным из вышестоящего Scope
function sayHelloTo(name) {
  const message = `Hello ${name}`;

  return function() {
    console.log(message);   //имеет доступ до вышестоящего scope
  }
}

const helloToIvan = sayHelloTo('Ivan');
const helloToArkadiyParovozov = sayHelloTo('Arkadiy Parovozov');
console.log(helloToIvan);
helloToIvan();
helloToArkadiyParovozov();

//Практическое применение
function createFrameWorkManager() {
  const frameworks = ['Angular', 'React'];

  return {
    print: function() {
      console.log(frameworks.join(' '));
    },
    add: function(framework) {
      frameworks.push(framework);
    }
  }
}

const manager = createFrameWorkManager();
console.log(manager);
manager.print();
manager.add('VueJS');
manager.print();        //Мы взаимодествием с массивом frameworks, но не имеем к нему доступ напрямую, private-переменная


// setTimeout
const fib = [1,2,3,5,8,13];
// for(var i = 0; i < fib.length; i++) {
//   setTimeout(function() {
//     console.log(`fib[${i}]=${fib[i]}`);
//   }, 1500);
// }
//Вместо ожидаемого результата мы получим через 1,5 секунды вот это:
// fib[6]=undefined
// fib[6]=undefined
// fib[6]=undefined
// fib[6]=undefined
// fib[6]=undefined
// fib[6]=undefined
// Мы работаем с одной переменной i, цикл for выполняется почти моментально и пока пройдёт 1,5 секунды i успеет дойти до 6 и выйти из цикла
// 1) Самый простой способ это исправить => вместо var использовать let
for(let i = 0; i < fib.length; i++) {
  setTimeout(function() {
    console.log(`fib[${i}]=${fib[i]}`);
  }, 1500);
}
// 2) Замыкания
for(var i = 0; i < fib.length; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(`fib[${j}]=${fib[j]}`);
    }, 1500)
  })(i);
}

const delta = 250;
var t = 1000;
for(var i=0; i<fib.length;i++) {  
  (function(j,t) {    
    setTimeout(function() {
      console.log(`${t} fib[${j}]=${fib[j]}`);
    }, t)
  })(i, t = t + delta);
}


