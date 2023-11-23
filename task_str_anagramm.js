const createDictonary = (str) => {
  const dictonary = {};
  str = str.toUpperCase();
  for(let i = 0; i < str.length; i++) {
    if(!dictonary[str[i]]) {
      dictonary[str[i]] = 1;
    } else {
      dictonary[str[i]]++;
    }
  }
  return dictonary;
}

const anagram = (strA, strB) => {
  const dictonaryA = createDictonary(strA);
  const dictonaryB = createDictonary(strB);
  
  if(Object.keys(dictonaryA).length !== Object.keys(dictonaryB).length) return false;

  for(let letter in dictonaryA) {
    if(dictonaryA[letter] !== dictonaryB[letter]) {
      console.log(`${letter}: ${dictonaryA[letter]} -  ${dictonaryB[letter]}`);
      return false;
    }
  }

  return true;
}

console.log(anagram('finder', 'Friend')) // true
console.log(anagram('hello', 'bye')) // false