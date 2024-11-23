// Spread 연산자 와 Rest 매개변수
// 1. Spread  : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// 배열
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

// 객체
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);

// 함수
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(...rest) {
  console.log(rest);
}

funcB(...arr1); // [1,2,3] - 매개변수 rest로 arr1 배열

function funcB(one, ...rest) {
  console.log(rest); // [2,3] - 매개변수 one에 arr1[0] 후 매개변수 ...rest 나머지 값
}

funcB(...arr1);

// 오류 상황
    // rest 매개변수가 마지막에 와야함 : 모든 인수들을 다 저장하기 때문에
function funcB(one, ...rest, three) { 
    console.log(rest);
  }
  
  funcB(...arr1);
  