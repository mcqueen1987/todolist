require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.component(
	    'passport-clients',
	    require('./components/passport/Clients.vue')
);

Vue.component(
	    'passport-authorized-clients',
	    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
	    'passport-personal-access-tokens',
	    require('./components/passport/PersonalAccessTokens.vue')
);

import routes from './routes';    

const router = new VueRouter({
    routes
})

var vm = new Vue({
  router
}).$mount('#app');
