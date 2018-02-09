import Vue from 'vue'

// Loop Directive
Vue.directive('oo-grid', function (el, binding) {
    console.log(el);
    el.setAttribute('oo-grid', binding.value);
});
