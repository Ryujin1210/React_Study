// 1. 함수 표현식 - 값으로 써 사용

function funcA() {
  //   console.log('funcA');
}

let varA = funcA;
// console.log(varA);
varA();

// 선언식이 아니라 값으로서 함수 사용
let varB = function funcB() {
  //   console.log('funcB');
};

varB();

// 따라서 익명함수로 사용해도 문제 없음
let varC = function () {
  // 익명 함수
  //   console.log('funcC');
};

varC();

funcA(); // 정상 작동
// funcB(); // 오류 발생

// 2. 화살표 함수
/* 익명 함수 사용
        let varD = function() {
            return 1;
        }
    */

// 화살표 함수 사용
let varD = () => {
  return 1;
};
console.log(varD());

// 더 간결하게
let varE = () => 1;
console.log(varE());

let varF = (value) => value + 1;
console.log(varF(1));
