import Vue from "vue";
import App from "./App.vue";
import dcicework from "dcicework";
import "dcicework/lib/style/index.css"; //放上面点避免覆盖项目中ant的样式
import "./core/lazy_use_antd"; // use lazy load components
import "dcicework/lib/style/index.css";

Vue.config.productionTip = false;
Vue.use(dcicework as any);
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
