// 1. 객체 (object) 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: '유원근', // key: value
  age: 25,
  hobby: '헬스',
  job: 'iOS Developer',
  extra: {}, // 프로퍼티로 함수 사용 가능
  10: 20, // 프로퍼티로 숫자 값 사용 가능
  'like cat': true, // 키로 띄어쓰기 포함 시에는 따옴표 필요
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 점 표기법
// let name = person.name2; - 없는 키를 요청시 undefined
console.log(name); // 중간에 줄 그어지는 부분은 타입스크립트 관련

let age = person['age']; // 괄효 표기법
console.log(age);

let property = 'hobby';
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티 추가하는 방법
person.job = 'iOS Developer';
person['favoriteFood'] = '초밥';

console.log(person);

// 3.3 프로퍼티를 수정하는 법
person.job = 'Student';
person['favoriteFood'] = 'sushi';

console.log(person);

// 3.4 프로퍼티를 삭제하는 법
delete person.job;
delete person['favoriteFood'];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = 'name' in person;
let result2 = 'cat' in person;
console.log(result1);
console.log(result2);
