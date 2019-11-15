import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Scene } from 'three';


const scene = new Scene();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

$(".b-navbar-brand").mouseover(function(){
  $(this).animate({
      paddingTop: "30px"
  }, 100);
}).mouseout(function(){
  $(this).animate({
      paddingTop: "15px"
  }, 100);
});
$('#imageid').hover(function() {
  $(this).attr('src', "../assets/basura2.png");
}, function() {
  $(this).attr('src', '/folder/image1.jpg');
});