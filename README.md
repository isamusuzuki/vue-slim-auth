# Vue-Slim-Authとは？

作成日 2019/01/17

このデモは、クライアントサイドは、Vue.jsを使ってSPA（シングルページアプリケーション）を実現し、サーバーサイドは、Slim Frameworkを使ってログイン認証を実現させている

## クライアントサイドの特長

- JavaScriptコードをコンパイルしていない
- `type=module`で、別ファイル化を実現している
- CDNで Bulma, FontAwesome, Vue.js, axios, Vue-Router, Vuex を組み込んでいる

## サーバーサイドの特長

- PHPのテンプレートは使っていない
- サーバーは、静的ファイルを吐き出すか、APIとして働くかの2通りのみ
- APIは、SPAからAjaxでリクエストを受け付けている
- `/auth`は、ログイン認証に成功すると、JWT(JSON Web Token)を返す
- `/auth`以外は、Authorizationヘッダーにトークンを入れないとエラーを返す

## ローカルで動かすには？

- パッケージが必要なので、ルートディレクトリで`composer update`する
- Xampp (Apache)のConfigをいじって、`C:/Users/exeo/vue-slim-auth/public`をドキュメントルートにする
- Xampp (MySQL)を起動して、`setup_db.sql`を実行する
- Xampp (Apache, MySQL)を起動する
