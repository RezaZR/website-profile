import Vue from "vue";

import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_GRAPH_CMS_URI
});
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
