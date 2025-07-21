/**
 * クイズの結果を表示する
 */
function showResult() {
  // URLパラメータから結果を取得
  const params = new URLSearchParams(window.location.search);
  const correctCount = parseInt(params.get('correctCount'));
  const totalCount = parseInt(params.get('totalCount'));

  // 正答率を計算
  const correctRate = Math.round((correctCount / totalCount) * 100);

  // 結果を画面に表示
  document.getElementById('correct-count').textContent = correctCount;
  document.getElementById('total-count').textContent = totalCount;
  document.getElementById('correct-rate').textContent = correctRate;
}

// 結果表示画面の初期化
window.onload = () => {
  showResult();
};