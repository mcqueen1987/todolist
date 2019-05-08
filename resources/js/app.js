require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from './routes';
import store from './store';

const router = new VueRouter({
    routes
})

var vm = new Vue({
  	router,
	store
}).$mount('#app');
