import Vue from 'vue';
import axios from 'axios';

import transform from './transform'
import { deepCopy, extend } from './global'

Vue.prototype.$transform = transform
Vue.prototype.$deepCopy = deepCopy
Vue.prototype.$extend = extend

let newIns = axios.create();
Vue.prototype.$axios = newIns;

