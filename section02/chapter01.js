// Truthy와 Falsy - 참 같은 값, 거짓 같은 값

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = '';
let f7 = 0n;

if (!f1) {
  // not*not -> true
  console.log('Falsy');
}

// 2. Truthy 한 값
// -> 7가지의 Falsy 한 값을 제외한 나머지 모든 값.
let t1 = 'hello';
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t2) {
  console.log('Truthy');
}

// 3. 활용 사례

function printName(person) {
  //   if (person === undefined || person === null) {
  if (!person) {
    console.log('person의 값이 없음');
    return;
  }
  console.log(person.name);
}

// let person = null;
let person = { name: '유원근' };
printName(person);
