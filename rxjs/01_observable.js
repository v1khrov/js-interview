const { Observable, from, of, timer, fromEvent } = require("rxjs");

//Поток событий
from([{x: 11, y: 99}, {x: 91, y: 151}, {x: 152, y: 106}]).pipe(
  // map((value) => {  }),
  // filter((value) => {  }),
  // reduce((acc,  curr) => {   })
).subscribe(result => {
  console.log(result);
});

//Observable - наблюдаемый объект, доставляет изменения в подписку
const stream$ = new Observable((observer) => {

  //Observer - объект-наблюдатель, обработчики next, error, complete
  observer.next(1);
  setTimeout(() => {observer.next(2);}, 1000);
  setTimeout(() => {observer.next(3);}, 2000);
  setTimeout(() => {observer.complete()}, 3000);    
});
const subscription = stream$.subscribe({
  next: (value) => {console.log(value)},
  error: (err) => {console.error(err)},
  complete: () => {console.log(`complete`)}
});

subscription.unsubscribe();

//Создание Observable
of('foo');
// ---foo-|

from(['foo', 'bar', 'baz']);
// ---foo---bar---baz-|

timer(100, 500);
// -0---1---2---3--...

const promise = new Promise((resolve) => {resolve('foo')});
from(promise);
// --------------------foo-|

const btnElement = document.getElementById('btn');
fromEvent(btnElement, 'click');
//--evt-evt------evt----evt--...
