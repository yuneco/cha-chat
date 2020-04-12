# CHA-CHAT!

## CHA-CHATとは？

CHA-CHAT! は、COVID-19によって世界中の人たちがこれまで当たり前だった行動ができなくなり、人と人同士のつながりが大きく変わっていく中で、家族や親子、友人、職場の人間関係が少しでも明るく前に向くように考案・開発したアプリです。

とある企業グループの複数部署・グループ会社で横断的に活動していた、今は会社も組織も異なるメンバーが、この状況下で身の回りの小さな困りごとでも解決できることはないか、と話して3日で立ち上げました。

在宅期間が長期化し家族のコミュニケーションが少しマンネリ化したときや、ドリルや問題を解くだけでなく自己表現をしたり自分のやりたいことを見つける会話の糸口などはもちろん、ワークショップや授業のアイスブレイク、オンライン飲み会など、様々なシーンでお使いいただけると幸いです。

本プロジェクトはGitHubでオープンソース(MIT)として公開しています。だれでも自由にフォーク・改変して発展させていくことが可能です。多言語版などにも今後取り組んでいきたいと考えています。

こんな機能が欲しい、こんな質問も追加したい、うまく動かない、などご意見やプルリクエストがありましたらお気軽にご連絡ください。GitHubで受付しています。

CHA-CHAT! 開発チーム：

* よこたさん
* まっちゃん (yuneco)
* TETSUYA SASAKI


## ここであそべます！

https://yuneco.github.io/cha-chat/#/talk

## 開発者向け：ローカルで動かす・カスタマイズする

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

`/src/assets/cards.json`がカードの一覧です。

### License

MIT