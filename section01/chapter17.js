// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴

// 어떤 타입이든 배열에 저장이 가능함, 길이도 얼마든~
let arrC = [1, 2, 3, true, 'hello', null, undefined, () => {}, {}, []];

console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0]; // 인덱스
let item2 = arrC[1];

arrC[0] = 'hello';

console.log(item1, item2);
