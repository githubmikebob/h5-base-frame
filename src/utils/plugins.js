import Vue from 'vue';
import axios from 'axios';

import transform from './transform'
import * as message from './message'
import { deepCopy, extend } from './global'

Vue.prototype.$transform = transform
Vue.prototype.$deepCopy = deepCopy
Vue.prototype.$extend = extend
Vue.prototype.$msg = message

let newIns = axios.create();
Vue.prototype.$axios = newIns;

