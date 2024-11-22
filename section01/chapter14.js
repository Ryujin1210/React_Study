// 1. 스코프
// -> 전역 스코프 / 지역 스코프

let a = 1; // 전역 스코프 -> 전역 변수?

function funcA() {
  let b = 2; // 지역 스코프 -> 지역 변수?
  console.log(a);
}

funcA();
// console.log(b); // 지역 변수 오류 발생

if (true) {
  let c = 1; // 조건문 내부 역시 지역 변수
}

for (let i = 1; i <= 1; i++) {
  // 반복문과 초기식 역시 지역 변수
  let d = 1;
}
