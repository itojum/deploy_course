/**
 * クイズの問題データ
 * @typedef {Object} Question
 * @property {string} text - 問題文
 * @property {string} explanation - 解説文
 * @property {string} img - 問題の画像パス(任意)
 * @property {Array<Answer>} answers - 解答選択肢
 */

/**
 * 解答選択肢
 * @typedef {Object} Answer
 * @property {string} text - 選択肢のテキスト
 * @property {boolean} is_correct - 正解かどうか
 */

/** @type {Array<Question>} */
const base_questions = [
  {
    text: "Webページの見た目を整えるために使われる言語は？",
    explanation: "HTMLが構造を定義し、CSSが見た目（デザイン）を定義します。",
    answers: [
      { text: "HTML", is_correct: false },
      { text: "JavaScript", is_correct: false },
      { text: "CSS", is_correct: true },
      { text: "SQL", is_correct: false }
    ]
  },
  {
    text: "以下のうち、プログラミング言語でないものはどれ？",
    explanation: "HTMLはマークアップ言語であり、命令を実行するためのプログラミング言語ではありません。",
    answers: [
      { text: "Python", is_correct: false },
      { text: "HTML", is_correct: true },
      { text: "Java", is_correct: false },
      { text: "C++", is_correct: false }
    ]
  },
  {
    text: "コンピュータネットワークで、IPアドレスの役割はどれ？",
    explanation: "IPアドレスはインターネット上の機器を識別するための住所のようなものです。",
    answers: [
      { text: "ファイルの圧縮", is_correct: false },
      { text: "通信相手の識別", is_correct: true },
      { text: "画面の表示位置", is_correct: false },
      { text: "音声の記録", is_correct: false }
    ]
  },
  {
    text: "「if文」は何を行う構文？",
    explanation: "if文は条件によって処理の流れを変えるための分岐構文です。",
    answers: [
      { text: "繰り返し処理", is_correct: false },
      { text: "条件分岐", is_correct: true },
      { text: "関数定義", is_correct: false },
      { text: "データの出力", is_correct: false }
    ]
  },
  {
    text: "アルゴリズムとは何か？",
    explanation: "アルゴリズムとは、問題を解決するための手順や方法のことです。",
    answers: [
      { text: "プログラマーの名前", is_correct: false },
      { text: "バグの名前", is_correct: false },
      { text: "問題解決の手順", is_correct: true },
      { text: "コンピュータの部品", is_correct: false }
    ]
  },
  {
    text: "データベースで、情報を検索するために使う言語はどれ？",
    explanation: "SQL（Structured Query Language）は、データベースに対する操作を行う言語です。",
    answers: [
      { text: "HTML", is_correct: false },
      { text: "SQL", is_correct: true },
      { text: "CSS", is_correct: false },
      { text: "Python", is_correct: false }
    ]
  },
  {
    text: "オープンソースソフトウェアの特徴として正しいものは？",
    explanation: "オープンソースはソースコードが公開され、自由に利用・改変できるソフトウェアです。",
    answers: [
      { text: "有料でしか使えない", is_correct: false },
      { text: "誰でも改良や再配布ができる", is_correct: true },
      { text: "企業秘密として保持される", is_correct: false },
      { text: "特定のOSでしか使えない", is_correct: false }
    ]
  }
];