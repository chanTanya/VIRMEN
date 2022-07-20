<template>
  <div class="container">
    <el-image :src="bgUrl" fit="cover"></el-image>

    <el-row type="flex" align="middle" justify="center">
      <el-col :span="15">
        <el-image
          v-for="item in imgList"
          :key="item.url"
          :src="item.url"
          fit="cover"
          @click="dialogVisible = true"
          class="canLink"
        ></el-image>
      </el-col>
    </el-row>

    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-image :src="code" fit="cover" class="code"></el-image>
    </el-dialog>

    <FooterNav />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterNav from '@/components/footer';

export default {
  name: 'ProductPc',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FooterNav
  },
  mounted() {},
  beforeDestroy() {},
  data() {
    return {
      bgUrl: require('@/assets/product.png'),
      code: require('@/assets/code.png'),
      imgList: [
        { url: require('@/assets/product_1.png') },
        { url: require('@/assets/product_2.png') },
        { url: require('@/assets/product_3.png') },
        { url: require('@/assets/product_4.png') },
        { url: require('@/assets/product_5.png') },
        { url: require('@/assets/product_6.png') },
        { url: require('@/assets/product_7.png') }
      ],
      dialogVisible: false
    };
  },
  methods: {
    handleLink(currentLink) {
      if (currentLink) {
        this.$router.push({ path: currentLink });
      }
    },
    handleClose(done) {
      done();
    }
  }
};
</script>

<style scoped lang="less">
.container {
  flex: 1;
  overflow: auto;
  .canLink {
    cursor: pointer;
  }
  /deep/ .el-dialog__body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
