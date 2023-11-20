const fetchUrl = function(url) {
  console.log(`fetching ${url}... ${this.name}`);
}

const bob = {
  name: 'Bob'
};

function debounce(callback, delay) {
  let timer = null;
  return (...args) => {
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(callback, delay, args);    
  }
}

const fetching = debounce(fetchUrl.bind(bob), 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);