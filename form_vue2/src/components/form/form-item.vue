<template>
  <div>
    <div>
      <label v-if="label">{{ label }}</label>
    </div>
      <slot></slot>
  </div>
</template>

<script>
import LabelWrap from './label-wrap'
export default {
  name: 'ElFormItem',
  componentName: 'ElFormItem',
  components: {
    // use this component to calculate auto width
    LabelWrap
  },
  data () {
    return {
      props: {
        label: String,
        labelWidth: String,
        prop: String,
        required: {
          type: Boolean,
          default: undefined
        },
        rules: [Object, Array],
        error: String,
        validateStatus: String,
        for: String,
        inlineMessage: {
          type: [String, Boolean],
          default: ''
        },
        showMessage: {
          type: Boolean,
          default: true
        },
        size: String
      }
    }
  },
  mounted () {
    this.label = 'uuu'
    console.log('uuiii   ', this.label)
  },
  computed: {
    labelFor () {
      return this.for || this.prop
    }
  }
}
</script>
