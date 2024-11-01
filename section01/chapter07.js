// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 % 2;
let num3 = 1 + 2 * 10;

// 3. 복합 대입 연산자
let num4 = 10;
num4 = num4 + 10;
num4 += 10;
num4 -= 20;

// 4. 증감 연산자 (전위, 후위)
let num5 = 10;
num5++;
num5--;
++num5;
--num5;

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;

// ==, ===의 차이는 자료형까지 비교하는지
// == : 값만 비교
// ===: 자료형 까지
let comp3 = 1 == '1';
let comp4 = 1 === '1';

let comp5 = 2 > 1;
let comp6 = 2 >= 2;
