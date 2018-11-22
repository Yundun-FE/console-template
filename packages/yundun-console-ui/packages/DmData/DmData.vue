<style lang="postcss">
.dm-data {
  &-header {
    margin-bottom: 12px;
    overflow: hidden;
    .pull-right {
      float: right;
    }
    .input--search {
      width: 300px;
    }
  }
  &-pagination {
    &__desc {
      line-height: 45px;
      font-size: 13px;
      color: #333;
      font-weight: 600;
    }
  }
}
</style>
<template>
  <div class="dm-data">
    <div class="dm-data-tips">
      <slot name="tips" />
    </div>
    <div v-if="$slots.header || header" class="dm-data-header">
      <slot name="header" />
    </div>
    <div class="dm-data-table">
      <slot />
    </div>
    <div class="dm-data-pagination">
      <div class="pull-left dm-data-pagination__desc">
        <slot name="pagination-desc" />
      </div>
      <yd-pagination :page-size="pagination.per_page" :current-page="pagination.page" :total="pagination.total" @current-change="handleCurrentChange" @size-change="handleSizeChange" />
    </div>
  </div>
</template>

<script>
import { deepClone } from 'common/utils'

export default {
  props: {
    header: {},
    params: Object,
    autoInit: {
      type: Boolean,
      default: true
    },
    innerCard: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      pagination: {
        page: 1,
        per_page: 10,
        total: 0
      }
    }
  },

  mounted() {
    if (this.autoInit) this.handleInit()
  },

  methods: {
    handleInit() {
      const params = this.pagination
      Object.assign(params, this.params)
      this.$emit('init', params)
    },

    getPagination() {
      return this.pagination
    },

    getParams() {
      const params = deepClone(this.params)
      const pagination = deepClone(this.pagination)

      params.page = pagination.page
      params.per_page = pagination.per_page
      return params
    },

    init(options) {
      let { total = 0 } = options
      if (isNaN(total)) total = 0
      this.pagination.total = total
    },

    initPage() {
      this.handleCurrentChange(1)
    },

    handleSizeChange(per_page) {
      this.pagination.per_page = per_page
      this.pagination.page = 1
      this.handleInit()
    },

    handleCurrentChange(page) {
      this.pagination.page = page
      this.handleInit()
    }

  }
}
</script>
