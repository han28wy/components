<template>
<div>
    <input
    :value="values"
    v-bind="$attrs"
    @change="handleChange"
    @input="updateValue($event.target.value)"
     />
    <span v-if="props.showWordLimit" class="el-input__count">{{ textLength }}/{{ upperLimit() }}</span>
</div>
</template>

<script setup lang="ts">
import {inputProps} from './input.ts'
import {ref, computed, useAttrs} from 'vue'
import { caculateLength } from '../../utils/index'

type TargetElement = HTMLInputElement | HTMLTextAreaElement
const props = defineProps(inputProps)
const emits = defineEmits(['change', 'focus', 'blur', 'clear', 'update:modelValue']);
const values = ref(props.modelValue)

const updateValue = (newValue)=>{
    values.value = newValue
    emits('update:modelValue', newValue)
}
const handleChange = (event: Event)=>{
    console.log('ccchange')
    emits('change', (event.target as TargetElement).value)
}

const textLength = computed(()=>{
    const res = caculateLength(values.value)
    return res
})


const upperLimit = () => {
const attrs = useAttrs()
    return attrs.maxLength
}
</script>