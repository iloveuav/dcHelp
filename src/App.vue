<template>
  <div id="app">
    <img class="logo" alt="CloudBase logo" src="./assets/testicon.png" />
    <!-- <img class="logo" alt="Vue logo" src="./assets/redSpaceMap.png" /> -->
    <!-- <HelloWorld msg="欢迎使用 【名字】组件库在线调试平台" /> -->
    <OnlineDebug />
  </div>
</template>

<script>
import OnlineDebug from "./components/OnlineDebug/OnlineDebug.vue";

export default {
  name: "App",
  components: {
    OnlineDebug,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 120px;
  padding: 10px;
}
</style>
