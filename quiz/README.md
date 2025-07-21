# シンプルクイズアプリ

シンプルな 4 択クイズアプリケーションです。HTML と JavaScript の基本的な機能のみを使用して作られています。

## 機能

- 4 択クイズの出題と回答
- 正解・不正解の表示
- 解説の表示
- 最終結果（正解数と正答率）の表示

## ファイル構成

```
.
├── index.html      # トップページ
├── game.html       # クイズ画面
├── result.html     # 結果画面
└── assets/
    ├── css/        # スタイルシート
    ├── js/         # JavaScriptファイル
    └── img/        # 画像ファイル
```

### JavaScript ファイルの説明

- `questions.js`: クイズの問題データを管理
- `game.js`: クイズのメインロジック（問題表示、回答処理など）
- `result.js`: 結果画面の表示処理
- `common.js`: 共通で使用する関数

## 使い方

1. `index.html`をブラウザで開く
2. 「ゲームを始める」ボタンをクリック
3. 問題に解答する
   - 4 つの選択肢から 1 つを選ぶ
   - 「回答」ボタンをクリック
   - 解説を確認
   - 「次の問題」ボタンをクリック
4. 全問題が終わると結果画面に遷移

## カスタマイズ方法

### 問題を追加・変更する

`questions.js`の`base_questions`配列を編集します：

```javascript
const base_questions = [
  {
    id: 1,
    title: "問題1",
    text: "問題文をここに書く",
    explanation: "解説文をここに書く",
    img: "画像のパス（任意）",
    answers: [
      {
        text: "選択肢1",
        is_correct: true, // 正解の場合はtrue
      },
      {
        text: "選択肢2",
        is_correct: false,
      },
      // ... 他の選択肢 ...
    ],
  },
  // ... 他の問題 ...
];
```

### 出題数を変更する

`game.js`の`QUESTIONS_COUNT`を変更します：

```javascript
const QUESTIONS_COUNT = 2; // ここの数字を変更
```

