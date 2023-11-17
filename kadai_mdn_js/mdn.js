//本日の日付を取得
const date = new Date();


// 年を取得
const year = date.getFullYear();

// 月を取得
const month = date.getMonth() + 1;

//日を取得
const day = date.getDate();

// 年月日を出力
console.log(year + '年' + month + '月' + day + '日');
