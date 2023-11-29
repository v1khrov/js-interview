//Map и Set
// Set - коллекция данных, напоминает массив, данные не повторяются. Используется чтобы убрать дубликаты данных
// Map - ключи что угодно, даже объекты

const { Observable, timer, interval, take, mergeMap, switchMap, map, filter } = require("rxjs");

function createAnimalsList() {
  const animals = ['cat', 'dog'];

  return {
    add: function(value) {
      animals.push(value);
    },
    print: () => {
      console.log(animals);
    }
  }
}

const list = createAnimalsList();
list.print();
list.add('hamster');
list.print();

console.log(['cat', 'hamster'].map((item, index, ar) => {return item.length}));


const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);

console.log(["1","2","3"].map((str) => parseInt(str,10)));

interval(500).pipe(take(20),switchMap((value)=> {return timer(1000).pipe(map(value => console.log(value)))})).subscribe(console.log('well done'));
