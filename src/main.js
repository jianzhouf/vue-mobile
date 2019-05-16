import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ActionSheetView from "@/view/ActionSheetView"
import ListView from "@/view/ListView"

import Home from "@/view/Home"

Vue.use(VueRouter)

Vue.config.productionTip = false;
const routes = [
  { path: '/', component: Home },
  { path: '/actionSheetView', component: ActionSheetView },
  { path: '/listView', component: ListView },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')