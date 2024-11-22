// 1. 단락 평가
function returnFalse() {
  console.log('False 함수');
  return false;
}

function returnTrue() {
  console.log('True 함수');
  return true;
}

// 단락평가 : returnFalse에서 false 이므로 returnTrue를 실행하지 않고 결과 출력
console.log(returnFalse() && returnTrue());
// 단락평가 없이 둘다 실행
console.log(returnTrue() && returnFalse());
// 단락평가 : true가 먼저 나와 뒷 피연산자 미실행
console.log(returnTrue() || returnFalse());

// Truthy, falsy에도 적용
function returnFalse2() {
  console.log('False 함수');
  return undefined;
}

function returnTrue2() {
  console.log('True 함수');
  return 10;
}

console.log(returnTrue2() || returnFalse2());
console.log(returnFalse2() && returnTrue2());

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name; // person이 없을 경우 단락평가에 의해 name은 undefined
  console.log(name || 'person의 값이 없음'); // or 연산자의 첫 피연산자가 undefined 이므로 뒤 person의 값이 없음 출력
}

printName();
printName({ name: '유원근' });
