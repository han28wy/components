<template>
  <div class="el-form-item">
      <label>{{ label }}</label>
      <slot></slot>
  </div>
</template>

<script>
import LabelWrap from './label-wrap'
import {getPropByPath, dispatch, broadcast} from '../../util/index'
import AsyncValidator from 'async-validator'

export default {
  name: 'ElFormItem',
  componentName: 'ElFormItem',
  provide () {
    return {
      elFormItem: this
    }
  },

  inject: ['elForm'],
  components: {
    LabelWrap
  },
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
  },
  data () {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false
    }
  },
  mounted () {
    if (this.prop) {
      dispatch('ElForm', 'addField', [this])
    }
    // 对表单change 或者 blur事件 添加监听器
    this.addValidateEvents()
  },
  beforeDestroy () {
    dispatch('ElForm', 'removeField', [this])
  },
  computed: {
    // 在当前组件的父组件链中寻找 ElForm 组件，并返回该组件对象
    form () {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      console.log('parent.$options  ', parent.$options)
      while (parentName !== 'ElForm') {
        if (parentName === 'ElFormItem') {
          // this.isNested = true
        }
        parent = parent.$parent
        parentName = parent.$options.componentName
      }
      return parent
    }
  },
  methods: {
    resetField () {
      this.validateState = ''
      this.validateMessage = ''

      let model = this.form.model
      let value = this.fieldValue
      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      let prop = getPropByPath(model, path, true)

      this.validateDisabled = true
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue)
      } else {
        prop.o[prop.k] = this.initialValue
      }
      this.$nextTick(() => {
        this.validateDisabled = false
      })

      broadcast('ElTimeSelect', 'fieldReset', this.initialValue)
    },
    // 获取并合并不同来源的规则数组，包括 this.rules、this.form.rules 和 this.required
    getRules () {
      let formRules = this.form.rules
      const selfRules = this.rules
      const requiredRule = this.required !== undefined ? { required: !!this.required } : []

      const prop = getPropByPath(formRules, this.prop || '')
      formRules = formRules ? (prop.o[this.prop || ''] || prop.v) : []
      return [].concat(selfRules || formRules || []).concat(requiredRule)
    },
    addValidateEvents () {
      let rules = this.getRules()
      if (rules.length || this.required !== undefined) {
        this.$on('el.form.blur', this.onFieldBlur)
        this.$on('el.form.change', this.onFieldChange)
      }
    },
    onFieldBlur () {
      this.validate('blur')
    },
    onFieldChange () {
      if (this.validateDisabled) {
        this.validateDisabled = false
        return
      }

      this.validate('change')
    },
    validate (trigger, callback) {
      this.validateDisabled = false
      const rules = this.getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback()
        return true
      }

      this.validateState = 'validating'

      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger
        })
      }
      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      const model = {}

      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        callback(this.validateMessage, invalidFields)
        this.elForm && this.elForm.$emit('validate', this.prop, !errors, this.validateMessage || null)
      })
    }
  }
}
</script>

<style>
.el-form-item{
    display: flex;
    font-size:14px;
    margin-bottom: 10px;
}
</style>
