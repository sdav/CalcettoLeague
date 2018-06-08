import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'jquery'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) =>
// {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requiresAuth) {
//     next('/sign-in');
//   } else {
//     next();
//   }
// });