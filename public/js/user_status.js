export default {
    computed: {
        username: function() {
            return this.$store.state.username;
        },
        hasToken: function() {
            return this.$store.state.hasToken;
        }
    },
    methods: {
        login: function() {
            this.$router.push({ path: '/login' });
        },
        logout: function() {
            this.$store.commit('logout');
            this.$router.push({ path: '/login' });
        }
    },
    template: `
        <div class="container">
            <div class="is-pulled-right" v-if="hasToken">
                <span class="icon"><i class="fas fa-lg fa-user"></i></span>&nbsp;
                <span>{{ username }}さん</span>
                <a class="login-link" v-on:click="logout">ログアウト</a>
                <span class="icon"><i class="fas fa-lg fa-sign-out-alt"></i></span>
            </div>
            <div class="is-pulled-right" v-else>
                <a class="login-link" v-on:click="login">ログイン</a>
                <span class="icon"><i class="fas fa-lg fa-sign-in-alt"></i></span>
            </div>
        </div>
    `
};
