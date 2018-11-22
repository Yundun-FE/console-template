<template>
  <el-badge :status="STATUS_MAP[data.status]" :text="data.status_desc"/>
</template>

<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Yundun
+-----------------------------------------------------------------------------------------------------------------------
| 网站审核状态
|
*/

const STATUS_MAP = ['error', 'success', 'warning', 'warning', 'success']

export default {
  name: 'ColumnDomainStatus',
  props: {
    data: Object
  },
  data() {
    return {
      STATUS_MAP
    }
  }
}
</script>
