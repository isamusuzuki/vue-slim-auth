export default {
    data: function() {
        return {
        }
    },
    methods: {
        click: function() {
            axios.get('/api/user', {
                headers: { 'Authorization' : `Bearer ${this.$store.state.token}`}
            }).then(response => {
                window.alert(JSON.stringify(response.data.payload));
            }).catch(error => {
                if (error.response.status === 401) {
                    window.alert('トークンの有効期限が切れました。再度ログインしてください');
                    this.$store.commit('logout');
                    this.$router.push({ path: '/login' });
                } else {
                    window.alert(`エラー発生: ${JSON.stringify(error)}`);
                }
            });
        }
    },
    template: `
        <section class="section">
            <div class="container">
                <div class="is-size-1">Secret2</div>
                <a class="button is-link" v-on:click="click">APIを叩く</a>
            </div>
        </section>
    `
};