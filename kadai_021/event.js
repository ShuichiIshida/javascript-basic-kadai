//ボタンを取得
const submitBtn = document.getElementById('btn');

//クリック時の動作
submitBtn.addEventListener('click', () => {

  //2秒後の処理
  setTimeout(() => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
  }, 2000);

});
