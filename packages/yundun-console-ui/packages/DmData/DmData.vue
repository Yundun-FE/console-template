<style lang="postcss">
.DmData {
  &__header {
    margin-bottom: 16px;
    overflow: hidden;
    .pull-right {
      float: right;
    }
  }
  &__pagination {
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
  <div :class="b()">
    <div :class="b('tips')">
      <slot name="tips" />
    </div>
    <div v-if="$slots.header || header" :class="b('header')">
      <slot name="header" />
    </div>
    <div :class="b('core')">
      <slot />
    </div>
    <div :class="b('pagination')">
      <div :class="b('paginationDesc')" class="pull-left">
        <slot name="pagination-desc" />
      </div>
      <el-pagination :page-size="pagination.per_page" :current-page="pagination.page" :total="pagination.total" background layout="prev, pager, next" @current-change="handleCurrentChange" @size-change="handleSizeChange" />
    </div>
  </div>
</template>

<script>
import { deepClone } from '../../src/utils'
import create from '../../src/utils/create-basic'

export default create({
  name: 'DmData',

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
})
</script>
