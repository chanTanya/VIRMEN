<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view />

  </div>
</template>

<style lang="less">
#app {
  font-family: PingFang SC, PingFang SC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
}
</style>

<script>
import HeaderNav from './components/head-nav';

export default {
  components: {
    HeaderNav
  }
};
</script>
