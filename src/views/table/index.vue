<template>
  <div class="app-container">
    <el-button size="small" type="primary">添加域名</el-button>
    <el-button size="small" @click="init">刷新列表</el-button>
    <el-table v-loading="listLoading" :data="list" size="medium">
      <el-table-column label="域名" prop="domain" />
      <el-table-column label="状态" prop="" />
      <el-table-column label="协议" prop="" />
      <el-table-column label="使用场景" prop="" />
      <el-table-column label="创建时间" prop="" />
      <el-table-column label="操作" prop="" />
    </el-table>
    <el-pagination :total="total" background layout="prev, pager, next"/>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import Domain from '@/api/domain'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
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
      this.total = parseInt(total)
      this.listLoading = false
      console.log(list)
    }
  }
}
</script>
