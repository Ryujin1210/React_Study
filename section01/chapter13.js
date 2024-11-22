// 1. 콜백 함수

function main(value) {
  // 순서 지정 가능
  console.log(1);
  value();
  console.log(2);
  console.log('end');
}

// sub = 콜백 함수 : 뒷전에 실행되는, 나중에 실행되는
function sub() {
  console.log('i am sub');
}
main(sub);

// 함수 표현식 가능
main(function () {
  console.log('i am sub');
});

// 화살표 함수 가능
main(() => {
  console.log('i am sub');
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
