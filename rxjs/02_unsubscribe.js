const { Observable, from, map, filter } = require("rxjs");

//Observable - наблюдаемый объект, доставляет изменения в подписку
const stream$ = new Observable((observer) => {

  const interval = setInterval(() => {observer.next(1)}, 1000);

  return function unsubscribe() {
    console.log(`unsubscribe`);
    clearInterval(interval);
  }
});

const subscription = stream$.subscribe({
  next: (value) => {console.log(value)},
  error: (err) => {console.error(err)},
  complete: () => {console.log(`complete`)}
});

//unsubcribe - завершение получения значений
setTimeout(() => {subscription.unsubscribe();}, 5000);
