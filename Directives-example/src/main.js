import Vue from 'vue'
import App from './App.vue'

Vue.directive('listenTo', {
    bind(el, binding, vnode){
      el.addEventListener(binding.arg, binding.value);
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
