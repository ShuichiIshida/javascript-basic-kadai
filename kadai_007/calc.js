// 変数に任意の値を代入
let num = Math.floor(Math.random() * 20);

// 変数をコンソールに出力
console.log(num);

// 条件式
if (num % 3 == 0 && num % 5 == 0) {
  console.log('3と5の倍数です');
} else if (num % 3 == 0) {
  console.log('3の倍数です');
} else if (num % 5 == 0) {
  console.log('5の倍数です');
} else {
  console.log(num);
}
