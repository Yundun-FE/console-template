<template>
  <el-checkbox-group v-model="val">
    <el-checkbox v-for="item in checks" :key="item.value" :disabled="item.disabled" :label="item.value">{{ item.label }}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import create from 'yundun-common/utils/create-basic'

export default create({
  name: 'FormCheckbox',

  props: {
    size: {
      type: String,
      default: ''
    },
    checks: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      val: this.value
    }
  },

  watch: {
    val(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.val = val
    }
  }
})
</script>
