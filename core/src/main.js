import Vue from 'vue'

import Dashboard from './views/Dashboard.vue'
import NotFound from './views/NotFound.vue'

// import VuetifyToast from 'vuetify-toast-snackbar'

import Notifications from 'vue-notification'
import AsyncComputed from 'vue-async-computed'
import Tooltip from 'vue-directive-tooltip';

import VueMdl from 'vue-mdl'

import 'vue-directive-tooltip/css/index.css';
import 'dialog-polyfill/dist/dialog-polyfill.css';

 
Vue.use(AsyncComputed)
Vue.use(Tooltip);
Vue.use(Notifications)
Vue.use(VueMdl)

Vue.config.productionTip = false

const routes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/dashboard/': Dashboard
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
}).$mount('#app')
