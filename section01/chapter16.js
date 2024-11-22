// 1. 상수 객체
const animal = {
  type: '고양이',
  name: '나비',
  color: 'black',
};

// animal = { a: 1 }; // 상수인 animal에 또 다른 객체를 생성하여 할당하는 것은 불가능

// 기존 객체에 추가, 수정, 삭제는 가능
animal.age = 2; // 추가
animal.name = '까망이'; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: '유원근',
  // 메서드 선언
  sayHi() {
    console.log('안녕!');
  },
};

person.sayHi();
person['sayHi']();
