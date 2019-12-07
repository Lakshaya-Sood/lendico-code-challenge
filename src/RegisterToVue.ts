import Vue from 'vue'

// 1. Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// 2. VueSlider
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
Vue.component('VueSlider', VueSlider)
