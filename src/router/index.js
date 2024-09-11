import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
// import PlayerFilter from '@/components/PlayerFilter.vue'; // Import your PlayerFilter component
import PlayerList from '@/components/Player.vue';
Vue.use(Router);

export default new Router({
  mode: 'history', // Use history mode to remove hash (#) from URLs
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home, // You can create a simple Home.vue component
    },
    {
      path: '/filter',
      name: 'PlayerList',
      component: PlayerList, // The component for player filtering
    },
  ],
});