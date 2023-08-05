<template>
    <div class="el-form-item">
        <!-- <component :is="labelFor ? 'label' : 'div'">
            <slot name="label" :label="currentLabel">
            {{ currentLabel }}
            </slot>
        </component> -->
        <label>{{ currentLabel }}</label>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { FormItemProps } from './form-item'
import {provide, toRefs,reactive, nextTick, ref, inject, computed, onMounted,onBeforeUnmount, getCurrentInstance } from 'vue'
import { formContextKey, formItemContextKey } from './constants'
import {getProp} from './utils'
import type {
  FormItemContext, FormItemRule,
  FormValidateFailure,
} from './types'
defineOptions({
  name: 'ElFormItem',
})
const formItemRef = ref<HTMLDivElement>()
const instance = getCurrentInstance();

let initialValue: any = undefined
const props = defineProps(FormItemProps)

const formContext = inject(formContextKey, undefined)

const fieldValue = computed(() => {
  const model = formContext?.model
  return getProp(model, props.prop).value
})

const resetField =  ()=> {
 nextTick()
}
const clearValidate = ()=> {}

const validate = ()=> {}


const context: FormItemContext = reactive({
  ...toRefs(props),
  $el: formItemRef,
//   size: _size,
//   validateState,
//   labelId,
//   inputIds,
//   isGroup,
//   hasLabel,
//   addInputId,
//   removeInputId,
  resetField,
  clearValidate,
  validate,
})

provide(formItemContextKey, context)

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
    initialValue = fieldValue.value
  }
})

onBeforeUnmount(() => {
    formContext?.removeField(context)
})

const inputIds = ref<string[]>([])

const labelFor =  computed<string | undefined>(() => {
//   return props.for || inputIds.value.length === 1
//     ? inputIds.value[0]
//     : undefined
return true
})

const currentLabel = computed(() => {
    return props.label
    //实际上考虑 `${props.label || ''}${formContext?.labelSuffix || ''}`
})
</script>

<style>
.el-form-item{
    display: flex;
    font-size:14px;
    margin-bottom: 10px;
}
</style>