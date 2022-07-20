<template>
  <div class="footer">
    <p class="p">杭州威核狮大药房有限公司</p>
    <p class="p">
      <a href="http://beian.miit.gov.cn/" target="_blank" class="link"
        >浙ICP备2022015876号
      </a>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <span> 地址：浙江省杭州市萧山区南阳街道横蓬村</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  props: {
    size: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
@LinkColor: #0041a1;
.footer {
  height: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .p {
    font-size: 14px;
    font-weight: 400;

    a:hover {
      color: @LinkColor;
      text-decoration: underline;
    }

    .link {
      color: #000000;
    }
  }
}
</style>
