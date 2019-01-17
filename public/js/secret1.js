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
                this.$store.commit('logout');
                this.$router.push({ path: '/login' });
            });
        }
    },
    template: `
        <section class="section">
            <div class="container">
                <div class="is-size-1">Secret1</div>
                <a class="button is-link" v-on:click="click">APIを叩く</a>
            </div>
        </section>
    `
};