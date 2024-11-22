// 함수 선언

// function greeting() {
//   console.log('안녕하세요.');
// }

// console.log('호출 전');
// greeting();
// console.log('호출 후');

// 매개변수
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log('another');
  }

  another();
  let area = width * height;

  return area;
  console.log('리턴 후 실행안됌');
}

let area1 = getArea(120, 100);
console.log(area1);

// 10,20 인수
getArea2(10, 20);

// 호이스팅
// -> 끌어올리다 라는 뜻 함수가 아래에 있어도 가능함 : 함수 선언을 항상 위에 하지 않아도 됌
function getArea2(width, height) {
  function another() {
    // 중첩 함수
    console.log('another');
  }

  another();
  let area = width * height;

  return area;
  console.log('리턴 후 실행안됌');
}
