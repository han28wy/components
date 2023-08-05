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
import {useSlots, nextTick, ref, inject, computed, onMounted,onBeforeUnmount, getCurrentInstance } from 'vue'
import { formContextKey, formItemContextKey } from './constants'

defineOptions({
  name: 'ElFormItem',
})

const instance = getCurrentInstance();
console.log("🚀 ~ file: form-item.vue:18 ~ instance:", instance)
let initialValue: any = undefined
const props = defineProps(FormItemProps)

// const formContext = inject('addField',instance)
const formContext = inject(formContextKey, undefined)

const fieldValue = computed(() => {
    const model = formContext?.model
  return getProp(model, props.prop).value
})
onMounted(() => {
  if (props.prop) {
    formContext()
    initialValue = fieldValue.value
  }
})

onBeforeUnmount(() => {
    inject('removeField',instance)
    // dispatch('ElForm', 'el.form.removeField', instance);
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

const resetField = async ()=>{
await nextTick()
}


</script>

<style>
.el-form-item{
    display: flex;
    font-size:14px;
    margin-bottom: 10px;
}
</style>