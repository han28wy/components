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
import { dispatch} from '../../utils/index'
import { formItemProps } from './form-item'
import {useSlots, ref, computed, onMounted,onBeforeUnmount, getCurrentInstance } from 'vue'
const instance = getCurrentInstance();
onMounted(() => {
    if(props.prop){
        dispatch('ElForm', 'el.form.addField', instance);
        // this.addValidateEvents();
    }
})
onBeforeUnmount(() => {
    dispatch('ElForm', 'el.form.removeField', instance);
})

const props = defineProps(formItemProps)
// const emits = defineEmits(formItemEmits)
// const slots = useSlots()
const inputIds = ref<string[]>([])

const labelFor =  computed<string | undefined>(() => {
//   return props.for || inputIds.value.length === 1
//     ? inputIds.value[0]
//     : undefined
return true
})

const currentLabel = computed(() => {
    console.log('props.label',props.label)
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