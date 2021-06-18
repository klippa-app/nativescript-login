import Vue from 'nativescript-vue';
import Home from './components/Home.vue';

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__;

import {wireInGoogleSignIn, wireInFacebookLogin} from "@klippa/nativescript-login";
wireInGoogleSignIn("833713350466-78r5on6lj7ec2ep6k2bjanp8o7391h83.apps.googleusercontent.com");
wireInFacebookLogin();

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start();
