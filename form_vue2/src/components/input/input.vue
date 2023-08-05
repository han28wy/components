<template>
  <div>
    <input
      :value="value"
      ref="input"
      v-bind="$attrs"
      @change="handleChange"
      @input="updateValue($event.target.value)"
    />
    <span v-if="showWordLimit" class="el-input__count"
      >{{ textLength }}/{{ upperLimit }}</span
    >
  </div>
</template>

<script>
import { caculateLength } from '../../util/index'
export default {
  props: {
    value: {
      type: String,
      default: undefined
    },
    id: {
      type: String,
      default: undefined
    },
    disabled: Boolean,
    modelValue: {
      type: [String, Number, Object],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    resize: {
      type: String,
      value: ['none', 'both', 'horizontal', 'vertical']
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    formatter: {
      type: Function
    },
    parser: {
      type: Function
    },
    placeholder: {
      type: String
    },
    form: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    containerRole: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: undefined
    },
    tabindex: {
      type: [String, Number],
      default: 0
    },
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  computed: {
    textLength () {
      console.log(333)
      if (typeof this.value === 'number') {
        return String(this.value).length
      }

      return (this.value || '').length
    },
    upperLimit () {
      return this.$attrs.maxLength
    },
    nativeInputValue () {
      return this.value === null || this.value === undefined ? '' : String(this.value)
    }
  },
  watch: {
    value (val) {
      console.log('kkk ', val)
    },
    nativeInputValue () {
      this.setNativeInputValue()
    }
  },
  methods: {
    setNativeInputValue () {
      const input = this.getInput()
      if (!input) return
      if (input.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },
    getInput () {
      return this.$refs.input || this.$refs.textarea
    },
    handleChange (event) {
      console.log('ccchange')
    },
    updateValue (event) {
      console.log('666 777 ', event)
      this.$emit('input', event)
    }
  }
}
</script>
