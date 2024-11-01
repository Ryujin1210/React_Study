// 1. 묵시적 형 변환
// - > js 엔진이 알아서 형 변환 하는것

let num = 10;
let str = '20';

const strResult = num + str; // 1020 -> str + str

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 집접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = '10';
let strToNumber = Number(str1);

const numResult = 10 + strToNumber; // 20 -> num + num

let str2 = '10개';
// let strToNumber2 = Number(str2); - Nan

let strToNumber2 = parseInt(str2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + '입니다');
