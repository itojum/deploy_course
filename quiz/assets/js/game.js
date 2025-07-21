// ゲームの状態を管理する変数
let questions = [];      // 問題リスト
let currentQuestion;     // 現在の問題
let isCorrect = false;   // 正解したかどうか
let correctCount = 0;    // 正解数
let questionNumber = 0;  // 現在の問題番号

// 出題する問題数
const QUESTIONS_COUNT = 4;

// ゲーム開始時の処理
window.onload = () => {
  // 問題をシャッフルしてコピー
  questions = shuffleArray([...base_questions]);
  showNextQuestion();
};

/**
 * 次の問題を表示する
 */
function showNextQuestion() {
  // 問題が終わったらゲーム終了
  if (questionNumber === QUESTIONS_COUNT) {
    finishGame();
    return;
  }

  // 問題番号を更新
  questionNumber += 1;

  // 新しい問題を取得
  currentQuestion = questions.shift();
  
  // 問題文を表示
  const questionText = document.getElementById('question-text');
  questionText.textContent = currentQuestion.text;

  // 問題画像を表示
  const questionImg = document.getElementById('question-img');
  if(currentQuestion.img) {
    questionImg.src = currentQuestion.img;
    questionImg.style.display = 'block';
  } else {
    questionImg.style.display = 'none';
  }
  
  // 解答ボタンを設定
  setupAnswerButtons();

  // 解説を準備
  const explanationText = document.getElementById('explanation-text');
  explanationText.textContent = currentQuestion.explanation;

  // 結果表示をリセット
  const answerResultContainer = document.getElementById('answer-result-container');
  answerResultContainer.style.display = 'none';

  const resultButton = document.querySelector('#result-container > button');
  resultButton.disabled = false;
}

/**
 * 解答ボタンを設定する
 */
function setupAnswerButtons() {
  const answerButtons = getAnswerButtons();
  const answers = shuffleArray([...currentQuestion.answers]);
  
  answerButtons.forEach((button, index) => {
    // ボタンのテキストと正解情報を設定
    button.innerHTML = `${index + 1}. ${answers[index].text}`;
    button.dataset.isCorrect = answers[index].is_correct;
    
    // ボタンのスタイルをリセット
    button.classList.remove('primary-button', 'danger-button');
    button.classList.add('secondary-button');
    button.disabled = false;

    // クリックイベントを設定
    button.onclick = () => handleAnswerClick(index);
  });
}

/**
 * 解答ボタンがクリックされたときの処理
 */
function handleAnswerClick(clickedIndex) {
  const answerButtons = getAnswerButtons();
  
  answerButtons.forEach((button, index) => {
    if (index === clickedIndex) {
      // クリックされたボタンを選択状態に
      button.classList.remove('secondary-button');
      button.classList.add('primary-button');
      isCorrect = button.dataset.isCorrect === 'true';
    } else {
      // それ以外のボタンは非選択状態に
      button.classList.remove('primary-button');
      button.classList.add('secondary-button');
    }
  });
}

/**
 * 「回答」ボタンがクリックされたときの処理
 */
function onClickResultButton() {
  // 回答ボタンを無効化
  const resultButton = document.querySelector('#result-container > button');
  resultButton.disabled = true;
  
  // 正解・不正解を表示
  showAnswerResult();
  
  // 正解数をカウント
  if (isCorrect) {
    correctCount += 1;
  }

  // 解説を表示
  const answerResultContainer = document.getElementById('answer-result-container');
  answerResultContainer.style.display = 'block';
}

/**
 * 正解・不正解を表示する
 */
function showAnswerResult() {
  const answerButtons = getAnswerButtons();
  
  answerButtons.forEach(button => {
    // ボタンを無効化
    button.disabled = true;

    if (button.dataset.isCorrect === 'true') {
      // 正解の選択肢を緑色に
      button.classList.remove('secondary-button');
      button.classList.add('primary-button');
    } else {
      // 不正解の選択肢を赤色に
      button.classList.remove('primary-button', 'secondary-button');
      button.classList.add('danger-button');
    }
  });
}

/**
 * 解答ボタンの要素を取得する
 */
function getAnswerButtons() {
  return Array.from(document.getElementById('answer-container').children);
}

/**
 * ゲームを終了し、結果画面に遷移する
 */
function finishGame() {
  const params = new URLSearchParams({
    correctCount: correctCount,
    totalCount: questionNumber
  });
  window.location.href = `result.html?${params.toString()}`;
}