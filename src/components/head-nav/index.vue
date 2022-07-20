<template>
  <el-row class="nav" type="flex" align="middle">
    <el-col :span="8">
      <div class="imgWrapper">
        <img src="../../assets/logo@2x.png" alt="logo" height="38" />
      </div>
    </el-col>

    <el-col :span="16">
      <span
        v-on:click="handleLink(item.link)"
        v-for="item in links"
        :key="item.link"
      >
        <router-link
          :class="{ active: activeLink === item.link }"
          :to="item.link"
        >
          {{ item.title }}
        </router-link>
      </span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconHref: {
      type: String
    },
    size: {
      type: String
    },
    color: {
      type: String
    }
  },
  data() {
    return {
      activeLink: '/pc/home',
      links: [
        {
          link: '/pc/home',
          title: '首页'
        },
        {
          link: '/pc/product',
          title: '产品信息'
        },
        {
          link: '/pc/machine',
          title: '医疗器械'
        },
        {
          link: '/pc/about',
          title: '关于我们'
        }
      ]
    };
  },

  methods: {
    handleLink(currentLink) {
      const vm = this;
      vm.activeLink = currentLink;
    }
  }
};
</script>

<style lang="less" scoped>
@Height: 56px;

@LinkColor: #0041a1;

.nav {
  height: @Height;
  background: #ffffff;

  .imgWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: @Height;
  }

  a {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    display: inline-block;
    margin: 0 32px;
  }

  a:hover {
    color: @LinkColor;
  }

  .active {
    color: @LinkColor !important;
  }
}
</style>
