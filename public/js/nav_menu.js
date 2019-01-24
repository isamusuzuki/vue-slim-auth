export default {
    data: function() {
        return {
            isToggleActive: false
        }
    },
    methods: {
        toggleMenu: function() {
            this.isToggleActive = !this.isToggleActive;
        }
    },
    watch: {
        '$route' () {
            this.isToggleActive = false;
        }
    },
    template: `
        <nav class="navbar is-primary">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">DEMO</router-link>
                <a role="button" class="navbar-burger burger" data-target="navMenu"
                    v-on:click="toggleMenu" v-bind:class="{'is-active': isToggleActive}">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div id="navMenu" class="navbar-menu" v-bind:class="{'is-active': isToggleActive}">
                <div class="navbar-start">
                    <router-link to="/secret" class="navbar-item">SECRET</router-link>
                    <router-link to="/signup" class="navbar-item">SIGNUP</router-link>
                </div>
            </div>
        </nav>
    `
};
