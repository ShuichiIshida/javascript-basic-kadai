//ボタンの取得
const submitBtn = document.getElementById('btn');

//ボタンクリック時の処理
submitBtn.addEventListener('click', () => {

  //textの文字列を取得
  const text = document.getElementById('text');

  //文字を差し替え
  text.textContent = 'ボタンをクリックしました';

});
