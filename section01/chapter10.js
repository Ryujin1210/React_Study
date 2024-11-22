// for 반복문

for (let i = 0; i < 10; i++) {
  // 다음으로 스킵
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);

  if (i >= 5) {
    break;
  }
}
