import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from 'vue-router'

var firebaseConfig = {
  apiKey: "AIzaSyBq7NxbqMS2OH5tkc45rBPKTYWZYRqrndY",
  authDomain: "cms-angajati-vuejs.firebaseapp.com",
  projectId: "cms-angajati-vuejs",
  storageBucket: "cms-angajati-vuejs.appspot.com",
  messagingSenderId: "818607610208",
  appId: "1:818607610208:web:9d27223692bfa1a677e605",
  measurementId: "G-8T9780ZD75"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  firebase,
  render: h => h(App),
}).$mount('#app')
