<style lang="postcss">
</style>
<template>
  <a-layout-sider :trigger="null" v-model="collapsed" collapsible>
    <div class="logo" />
    <a-menu :default-selected-keys="['1']" theme="dark" mode="inline">
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>nav 1</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title">
        <a-icon type="user" />subnav 1</span>
        <a-menu-item key="1">option1</a-menu-item>
        <a-menu-item key="2">option2</a-menu-item>
        <a-menu-item key="3">option3</a-menu-item>
        <a-menu-item key="4">option4</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {

  components: {},
  props: {},

  data() {
    return {}
  },

  computed: {},

  mounted: {},

  methods: {}
}
</script>
