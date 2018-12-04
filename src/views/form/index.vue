<template>
  <div class="app-container">
    <el-form ref="form" :model="values" :rules="rules" class="form">
      <el-form-item :rules="rules.password" label="password" prop="password">
        <el-input v-model.number="values.password" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import DEMO from './demo'

export default {
  data() {
    return {
      DEMO,
      values: {
        password: ''
      },
      rules: {
        email: 'required|email',
        password: 'required|min:8|max:20'
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.form {
  max-width: 400px;
}
.line {
  text-align: center;
}
</style>

