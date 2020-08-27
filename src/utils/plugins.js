import Vue from 'vue';
import axios from 'axios';

import * as validate from './validate'
import * as global from './global'

let newIns = axios.create();
Vue.prototype.$axios = newIns;

Vue.prototype.$validate = validate
Vue.prototype.$global = global