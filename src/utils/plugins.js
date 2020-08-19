import Vue from 'vue';

import axios from 'axios';

let newIns = axios.create();
Vue.prototype.$axios = newIns;
