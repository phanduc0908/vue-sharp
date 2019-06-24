import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import FirstRouter from '@/components/FirstRouter';
import Axios from '@/components/Axios';

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/FirstRouter',
      name: 'FirstRouter',
      component: FirstRouter
    },
    {
      path: '/Axios',
      name: 'Axios',
      component: Axios
    }
  ]
});