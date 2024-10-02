let num = 8;
let str = '8';
let bool = Boolean;
let nul = null;
let undif = undefined;
let simb = Symbol;
let bigint = BigInt(8);

console.log( undif, bigint, simb, num, str, bool, undif)
console.log( typeof 8)
console.log( typeof '8')
console.log('type of num is:', typeof num)
console.log('type of string is:', typeof 'str')
console.log('type on null is:', typeof nul)   //object-fals

let num3 = 0;
let num1 = 3;
let num2 = 5;
let str1 ='3';
let str2 ='33';

console.log(num1 == num1)
console.log(num1 === num1)

console.log(num1 == num2)
console.log(num1 === num2)

console.log(str1 == str1)
console.log(str1 ===str1)

console.log(str1 == str2)
console.log(str2 === str1)

console.log(num1 == str1)
console.log(str1 == num2)
console.log(num1 === str1)

console.log(num1 + num2)
console.log(bool + bool) //aceasta nu inteleg daca putem asa face

console.log(++num1)
console.log(num1++)
console.log(str2++)

console.log(++str1)
console.log(str1++)
console.log(++str2) //aici da rezultat 35, de unde??? dupa calcul trebuie sa fie 34 sau 36

console.log( num1 - num2) //aici tot nu mii clar de unde rezultat 0
console.log(num1--)
console.log(--num2)

console.log(!num1)
console.log(!str1)
console.log(!bool)
console.log(!!str1)
console.log(!!bool)
console.log(!!num3) //valoarea 0, aici clar tot timpul da false
console.log(!!num1) //valoarea 3, aici clar e true

console.log(num2>num1) //operandul acesta nu este clar

console.log(num2*num1)
console.log(num2**num1)
console.log(num2/num1)

console.log(num2**num3)
console.log(num2/num3)

console.log(str2**str1)
console.log(str1/str2)

