<template>
  <form class="el-form" :class="[
    labelPosition ? 'el-form--label-' + labelPosition : '',
    { 'el-form--inline': inline }
  ]">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'ElForm',
  componentName: 'ElForm',
  data () {
    return {
      props: {
        model: Object,
        rules: Object,
        labelPosition: String,
        labelWidth: String
      }
    }
  }
}
</script>
