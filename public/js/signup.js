export default {
    data: function() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            hasMessage: false,
            message: '',
            isError: false
        }
    },
    methods: {
        signup: function () {
            this.hasMessage = false;
            this.message = '';
            this.isError = false;
            if (this.username === '') {
                this.hasMessage = true;
                this.message = 'ユーザー名が空です';
                this.isError = true;
            } else if (this.password === '') {
                this.hasMessage = true;
                this.message = 'パスワードが空です';
                this.isError = true;
            } else if (this.password !== this.confirmPassword) {
                this.hasMessage = true;
                this.message = 'パスワードが合いません';
                this.isError = true;
            } else {
                axios.post('/signup', {
                    username: this.username,
                    password: this.password
                }).then(() => {
                    this.hasMessage = true;
                    this.message = '登録できました';
                }).catch(error => {
                    this.hasMessage = true;
                    this.message = error.message;
                    this.isError = true;
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
                    <h1 class="title">新規登録する</h1>
                    <div class="field">
                        <label class="label">ユーザー名</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="ユーザー名"　v-model="username">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">パスワード</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="パスワード" v-model="password">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">確認のためもう一度</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="パスワード" v-model="confirmPassword">
                        </div>
                    </div>
                    <button class="button is-link" v-on:click="signup">登録する</button>
                    &nbsp;&nbsp;
                    <span class="has-text-weight-bold is-size-4" v-if="hasMessage" 
                        v-bind:class="{'has-text-danger': isError}">{{ message }}</span>
                </div>
                </div>
                </div>
            </div>
        </section>
    `
};