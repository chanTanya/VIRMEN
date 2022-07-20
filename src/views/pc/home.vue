<template>
  <div class="container">
    <div class="main"></div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterNav from '@/components/footer';

export default {
  name: 'ShopPc',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FooterNav
  },
  created() {
    // const vm = this;
    // // vm.onload();
  },
  mounted() {
  },
  beforeDestroy() {
  },
  data() {
    return {

    };
  },
  computed: {
    // id () {
    //   return sessionStorage.getItem('taskId');
    // }
  }
};
</script>

<style scoped lang="less" >
.container {
  flex: 1;
  overflow: auto;

  .main {
    height: 100%;
    background-image: url('../../assets/home@2x.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
