const isLetter = (letter) => {
  return (letter.toUpperCase() !== letter.toLowerCase());
}


const isPalindrome = (str) => {
  str = str.toUpperCase();

  let start = 0;
  let end = str.length - 1;
  
  while(start < end) {

    if(!isLetter(str[start])) {
      start++;
      continue;
    }

    if(!isLetter(str[end])) {
      end--;
      continue;
    }      

    if(str[start] !== str[end]) return false;

    start++;
    end--;

  }

  return true;

}


const isPalindromeRegEx = (str) => {
  str = str.toUpperCase();
  str = str.replace(/[\s.,%-']/g, '');

  let revert = '';
  for(let i = 0; i < str.length; i++) {    
    revert = revert + str[str.length - i - 1];
  }
  return str === revert;
}

console.log(isPalindrome('Казак'));
console.log(isPalindrome(`Madam, I'm Adam`));