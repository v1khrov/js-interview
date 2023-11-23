function fibonacci(n, cache = {}) {
  if(n in cache) {
    return cache[n];
  }

  if(n <= 1) return n;

  const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  cache[n] = result;

  console.log(cache);

  return result;
} // ? memo



console.log(fibonacci(8)); // 21

//0,1,1,2,3,5,8,13,21,34