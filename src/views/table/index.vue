<template>
  <div class="app-container">
    <DmData ref="dmData">
      <div slot="header">
        <el-button size="small" type="primary">添加域名</el-button>
        <el-button size="small" @click="init">刷新列表</el-button>
      </div>
      <el-table v-loading="listLoading" :data="list" size="medium">
        <el-table-column label="域名" prop="domain" />
        <el-table-column label="状态" prop="" />
        <el-table-column label="协议" prop="" />
        <el-table-column label="使用场景" prop="" />
        <el-table-column label="创建时间" prop="" />
        <el-table-column label="操作" width="200" prop="" >
          <template slot-scope="scope">
            <el-button size="small">进入配置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </DmData>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import Domain from '@/api/domain'

export default {
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.listLoading = true
      const { list, total } = await Domain.webDomainList()
      this.list = list
      this.$refs.dmData.init({
        total: parseInt(total)
      })
      this.listLoading = false
      console.log(list)
    }
  }
}
</script>
