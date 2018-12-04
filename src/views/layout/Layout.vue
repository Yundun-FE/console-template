<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <Sider/>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" class="trigger" @click="()=> collapsed = !collapsed" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', background: '#fff', flex: 'none' }">
        <AppMain />
      </a-layout-content>
    </a-layout>
  </a-layout>
  <!-- <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
    </div>
  </div> -->
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import Sider from './components/Sider'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Sider
  },
  mixins: [ResizeMixin],

  data() {
    return {
      collapsed: false
    }
  },

  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>
<style lang="postcss">
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
@import 'src/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
