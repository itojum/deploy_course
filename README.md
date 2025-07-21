# デプロイ講座 - Webアプリ集

## 📁 プロジェクト構成

```
deploy_course/
├── quiz/          # シンプルクイズアプリ（HTML/CSS/JavaScript）
├── tetris/        # テトリスゲーム（HTML/CSS/JavaScript）
├── todo/          # Todoアプリ（React + TypeScript + Vite）
└── README.md      # このファイル
```

## 🎯 各プロジェクトの概要

### 1. Quiz App (quiz/)
**技術スタック**: HTML, CSS, JavaScript

4択クイズアプリケーションです。フロントエンドの基本的な技術のみを使用して作られています。

**主な機能**:
- 4択クイズの出題と回答
- 正解・不正解の判定と解説表示
- スコアと正答率の計算
- 問題のカスタマイズ機能

### 2. Tetris Game (tetris/)
**技術スタック**: HTML, CSS, JavaScript

クラシックなテトリスゲームの実装です。ゲーム開発の基本的な概念を学習できます。

**主な機能**:
- テトリミノの落下とローテーション
- ライン消去システム
- スコアとレベルシステム
- ゲームオーバー機能

### 3. Todo App (todo/)
**技術スタック**: React, TypeScript, Vite, Jotai, SmartHR UI

モダンなReact開発の技術スタックを使用したTodoアプリケーションです。

**主な機能**:
- タスクの追加・編集・削除
- タスクの完了状態管理
- フィルタリング機能（全て・アクティブ・完了済み）
- 期日設定機能
- レスポンシブデザイン

## 🚀 実行方法

### Quiz App
```bash
# quizディレクトリに移動
cd quiz

# ブラウザでindex.htmlを開く
# または、Live Serverなどを使用してローカルサーバーを起動
```

### Tetris Game
```bash
# tetrisディレクトリに移動
cd tetris

# ブラウザでindex.htmlを開く
# または、Live Serverなどを使用してローカルサーバーを起動
```

### Todo App
```bash
# todoディレクトリに移動
cd todo

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:5173 にアクセス
```
