const { Observable, from, of, timer, fromEvent } = require("rxjs");

const getPromise = (value) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(value);
  }, 1500);
});

from(getPromise('⏰')).subscribe(data => console.log(data));