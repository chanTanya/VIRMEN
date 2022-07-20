<template>
  <div class="container">
    <el-image :src="bgUrl" fit="cover"></el-image>

    <el-row type="flex" align="middle" justify="center">
      <el-col :span="15">
        <el-image :src="img1" fit="cover"></el-image>
      </el-col>
    </el-row>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterNav from '@/components/footer';

export default {
  name: 'AboutPc',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FooterNav
  },

  mounted() {},
  beforeDestroy() {},
  data() {
    return {
      bgUrl: require('@/assets/about@2x.png'),
      img1: require('@/assets/about_1.png')
    };
  }
};
</script>

<style scoped lang="less">
.container {
  flex: 1;
  overflow: auto;
}
</style>
