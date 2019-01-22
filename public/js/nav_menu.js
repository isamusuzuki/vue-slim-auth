export default {
    data: function() {
        return {
            isMenuActive: false
        }
    },
    methods: {
        toggleMenu: function() {
            this.isMenuActive = !this.isMenuActive;
        }
    },
    watch: {
        '$route' () {
            this.isMenuActive = false;
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
                <div class="navbar-start">
                    <router-link to="/secret1" class="navbar-item">SECRET1</router-link>
                    <router-link to="/secret2" class="navbar-item">SECRET2</router-link>
                    <router-link to="/signup" class="navbar-item">SIGNUP</router-link>
                </div>
            </div>
        </nav>
    `
};
