export default {
    computed: {
        isMenuActive: function () {
            return this.$store.state.isMenuActive;
        }
    },
    methods: {
        toggleMenu: function() {
            this.$store.commit('toggleMenu');
        }
    },
    watch: {
        '$route' () {
            this.$store.commit('resetMenu');
        }
    },
    template: `
        <nav class="navbar is-primary">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">DEMO</router-link>
                <a role="button" class="navbar-burger burger" data-target="navMenu"
                    v-on:click="toggleMenu" v-bind:class="{'is-active': isMenuActive}">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div id="navMenu" class="navbar-menu" v-bind:class="{'is-active': isMenuActive}">
                <div class="navbar-end">
                    <router-link to="/secret1" class="navbar-item">SECRET1</router-link>
                    <router-link to="/secret2" class="navbar-item">SECRET2</router-link>
                </div>
            </div>
        </nav>
    `
};
