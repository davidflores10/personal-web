import VueRouter from "vue-router";
import Home from '../components/Home/Home.vue'
import Expirences from '../components/Expirences/Expirences.vue'

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new VueRouter({
    routes: [
        { path: '*', component: Home },
        { path: '/', component: Home },
        { path: '/home', name: 'home', component: Home },
        { path: '/expirence', name: 'expirences', component: Expirences }
    ]
});




