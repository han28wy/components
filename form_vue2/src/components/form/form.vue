<template>
  <div>
    <form class="el-form">
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ElForm',
  componentName: 'ElForm',
  provide () {
    return {
      elForm: this
    }
  },
  data () {
    return {
      fields: [],
      props: {
        model: Object,
        rules: Object,
        labelPosition: String,
        labelWidth: String
      }
    }
  },
  created () {
    this.$on('addField', field => {
      if (field) {
        this.fields.push(field)
      }
    })
    this.$on('removeField', field => {
      if (field) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  },
  methods: {
    resetFidlds () {
      console.log('我在reset')
      if (!this.model) {
        console.log('不能执行')
      }
      this.fields.forEach(item => {
        item.resetField()
      })
    }
  }
}
</script>
