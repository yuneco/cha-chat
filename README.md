# talk-card

## 試したいとき

https://yuneco.github.io/talk-card/#/talk

## ローカルで動かす・カスタマイズする

### 必要なもの

[Node.js](https://nodejs.org/ja/)と[git](https://git-scm.com/downloads)をインストールしてください。
Macの場合gitはインストール済みかもしれません。

### リポジトリをクローンする

```sh
cd 好きなディレクトリ
git clone https://github.com/yuneco/talk-card.git
```

### 実行する

プロジェクトのフォルダに移動

```sh
cd さっきのディレクトリ/talk-card
```

初回だけ、以下を実行

```sh
npm install
```

その後、

```sh
cd さっきのディレクトリ/talk-card
npm run serve
```

↓こんな感じで表示されます

```sh
 DONE  Compiled successfully in 

Type checking in progress...

  App running at:
  - Local:   http://localhost:8080 
  - Network: http://192.168.0.132:8080

No type errors found
Version: typescript 3.8.3
Time: 624ms
```

表示されたURLにアクセス。「192.168.xxx.xxx」の方は同じネットワーク(WiFi)内のスマホでもアクセスできます。

### カスタマイズ

`/src/assetes/cards.json`がカードの一覧です。
