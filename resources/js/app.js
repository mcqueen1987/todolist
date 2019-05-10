require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
// import BootstrapVue from "bootstrap-vue"
// import '../sass/custom.scss'

Vue.use(VueRouter);
// Vue.use(BootstrapVue);

import routes from './routes';
import store from './store';

const router = new VueRouter({
    routes
})

var vm = new Vue({
  	router,
	store
}).$mount('#app');
