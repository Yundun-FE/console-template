<style lang="postcss">
@keyframes card-loading {
  0%,
  to {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.item-number {
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: relative;

  .block-loading {
    position: absolute;
    left: 0px;
    top: -5px;
    right: 0px;
    bottom: 0px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__num {
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;

    &--primary {
      color: var(--color-primary) !important;
    }
    &--green {
      color: var(--status-success) !important;
    }
    &--error {
      color: var(--status-error) !important;
    }
    &--warning {
      color: var(--status-warning) !important;
    }
    &--success {
      color: var(--status-success) !important;
    }
    &--success {
      color: var(--color-success) !important;
    }
    &--warning {
      color: var(--color-warning) !important;
    }
    &--danger {
      color: var(--color-danger) !important;
    }
  }

  &__unit {
    color: #666;
    font-size: 18px;
    margin-left: 5px;
  }

  p.item-number__title {
    margin: 0px;
    margin-top: 4px;
    color: #999;
    font-size: 13px;
    font-weight: 600;
    line-height: 13px;
  }

  &.size--large {
    .item-number__num {
      font-size: 42px;
    }

    .item-number__unit {
      font-size: 24px;
    }

    p.item-number__title {
      margin: 0px;
      color: #333;
      font-size: 14px;
      margin-top: 4px;
      font-weight: 500;
      line-height: 14px;
    }
  }

  .ant-card-loading-block {
    display: inline-block;
    margin: 5px 1% 0;
    height: 14px;
    border-radius: 2px;
    background: linear-gradient(
      90deg,
      rgba(207, 216, 220, 0.2),
      rgba(207, 216, 220, 0.4),
      rgba(207, 216, 220, 0.2)
    );
    animation: card-loading 1.4s ease infinite;
    background-size: 600% 600%;
  }
}
</style>

<template>
  <div :class="['size--' + size, b()]">
    <div v-if="loading" class="block-loading">
      <p><span class="ant-card-loading-block" style="width: 28%;"/><span class="ant-card-loading-block" style="width: 62%;"/></p>
      <p><span class="ant-card-loading-block" style="width: 22%;"/><span class="ant-card-loading-block" style="width: 66%;"/></p>
      <p class="ant-card-loading-block" style="width: 94%;"/>
    </div>
    <h2 :class="b('num', color)">
      {{ value || 0 }}<slot/><span v-if="unit" :class="b('unit')">{{ unit }}</span>
    </h2>
    <p :class="b('title')">{{ title }}</p>
  </div>
</template>

<script>
import create from '../../src/utils/create-basic'

export default create({
  name: 'itemNumber',

  props: {
    value: [String, Number],
    title: {},
    unit: String,
    loading: Boolean,
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    type: String
  }
})
</script>
