<template>
<div>
    <input
    :value="values"
    @change="handleChange"
    @input="updateValue($event.target.value)"
     />
</div>
</template>

<script setup lang="ts">
import {inputProps} from './input.ts'
import {ref} from 'vue'

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
</script>