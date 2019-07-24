import Vue from 'vue';
import List from '../components/list';

[List].forEach((component) => {
  Vue.component(component.name, component);
});