# Vue-Slim-Authとは？

作成日 2019/01/17、更新日 2019/01/24

このアプリは、クライアントサイドは、Vue.jsを使ってSPA（シングルページアプリケーション）を実現し、サーバーサイドは、Slim Frameworkを使ってログイン認証を実現させている。

## クライアントサイドの特長

- JavaScriptコードをWebpackなどでコンパイルしていない
- scriptタブで`type=module`を指定し、`import`コマンドを使っている（よって、IEでは動作しない）
- CDNでBulma, FontAwesome, Vue.js, axios, Vue-Router, Vuexを組み込んでいる

## サーバーサイドの特長

- サーバーは、静的ファイルを吐き出すか、APIとして働くかの2通りのみで、テンプレートは使っていない
- `/auth`APIは、ログイン認証に成功すると、JWT(JSON Web Token)を返す
- `/auth`以外のAPIは、Authorizationヘッダーにトークンを入れないとエラーを返す
- サーバーサイドのページ構成は、`src/routes.php`を見てください

## ローカルで動かすのに必要なもの

- Windows 10（Macでは検証していない）
- [XAMPP](https://www.apachefriends.org/jp/index.html)
- [Composer](https://getcomposer.org/)
- Linuxサーバーでの設定方法はここでは説明しない
- ログインできるID/PWは、 `user/user@123`

## インストール方法

```bash
git clone git@github.com:isamusuzuki/vue-slim-auth.git
cd vue-slim-auth
composer install
```

- Xampp (Apache)のConfigをいじって、`C:/Users/{your-name}/vue-slim-auth/public`をドキュメントルートにする
- Xampp (MySQL)を起動して、`setup_db.sql`を実行する
- Xampp (Apache, MySQL)を起動する
- ブラウザで'localhost'を開く

## ファイルディレクトリ構成

```text
--vue-slim-auth
    |--public/
    |   |--js/ ... SPAの構成ファイル群
    |   |   |--login.js ... ログインページ
    |   |   |--nav_menu.js ... ナビゲーションメニューのコンポーネント
    |   |   |--secret.js ... 秘密ページ（ログイン前のアクセス不可）
    |   |   |--signup.js ... 新規登録ページ
    |   |   |--top.js ... トップページ
    |   |   `--user_status.js ... ユーザーステイタスのコンポーネント
    |   |
    |   |--.htaccess ... Apache用の設定ファイル
    |   `--index.php ... Slim Frameworkの起動ファイル
    |
    |--src/ ... Slim Frameworkの構成ファイル軍
    |   |--dependencies.php ... 依存性注入コンテナ
    |   |--middleware.php ... ミドルウェア
    |   |--routes.php ... ルーティング
    |   `--settings.php ... 設定ファイル
    |
    |--templates/
    |   `--index.phtml ... トップページ
    |
    |--composer.json ... Composerの設定ファイル1
    |--composer.lock ... Composerの設定ファイル2
    |--README.md ... このファイル
    `--setup_db.sql ... DBテーブル作成
```
