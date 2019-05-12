import VueRouter from "vue-router";
import Home from '../components/Home/Home.vue'

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
});




