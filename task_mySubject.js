class MySubject {

  callbacks = [];

  constructor() {

  }

  next(value) {
    for(let callback of this.callbacks) {
      callback(value);
    }
  }

  subscribe(callback) {
    this.callbacks.push(callback);
  }

}

const subject = new MySubject();

subject.subscribe((value) => {
  console.log(value + 1);
});

subject.subscribe((value) => {
  console.log(value + 3)
});

subject.next(1);
subject.next(2);