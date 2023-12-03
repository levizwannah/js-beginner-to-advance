function findGCD(num1, num2) {
  let gcd = 1;

  let k = 2;

  while (k <= num1 / 2 && k <= num2 / 2) {
    
    if(num1 % k === 0 && num2 % k === 0) {
        gcd = k;
    }

    k++;
  }

  return gcd;
}

console.log(`The GCD of 15 and 10 is ${findGCD(15, 10)}`);

function isPalindrome(word) {
    
    for(let i = 0, j = word.length - 1; i < j; i++, j--) {
        if(word[i] !== word[j]) return false;
    }

    return true;
}

console.log(`anna is palindrome: ${isPalindrome('anna')}`)
console.log(`Maryel is palindrome: ${isPalindrome('Maryel')}`)
