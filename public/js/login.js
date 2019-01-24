export default {
    data: function() {
        return {
            username: '',
            password: '',
            hasError: false
        }
    },
    methods: {
        login: function () {
            if (this.username === '' || this.password === '') {
                this.hasError = true;
            } else {
                this.hasError = false;
                axios.post('/auth', {
                    username: this.username,
                    password: this.password
                }).then(response => {
                    this.$store.commit('loggedin', {
                        token: response.data.token,
                        username: this.username});

                    if (this.$route.query.redirect) {
                        this.$router.push(this.$route.query.redirect);    
                    } else {
                        this.$router.push({ path: '/' });
                    }
                }).catch(error => {
                    console.log(error);
                    this.hasError = true;
                });
            }
        }
    },
    template: `
        <section class="section">
            <div class="container">
                <div class="columns">
                <div class="column is-offset-2 is-8">
                <div class="box">
                    <h1 class="title">ログインしてください</h1>
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="ユーザー名"　v-model="username">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input class="input" type="password" placeholder="パスワード" v-model="password">
                        </div>
                    </div>
                    <button class="button is-link" v-on:click="login">ログイン</button>
                    &nbsp;&nbsp;
                    <span class="has-text-danger has-text-weight-bold is-size-4" v-if="hasError">認証エラー!!</span>
                </div>
                </div>
                </div>
            </div>
        </section>
    `
};