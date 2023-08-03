<template>
<div>
    <input
    :value="props.value"
    @change="handleChange"
     />
</div>
</template>

<script setup lang="ts">
import {inputProps} from './input.ts'

type TargetElement = HTMLInputElement | HTMLTextAreaElement
const props = defineProps(inputProps)
const emits = defineEmits(['change', 'focus', 'blur', 'clear']);

console.log(props.value)

const handleChange = (event: Event)=>{
    console.log('ccchange')
    emits('change', (event.target as TargetElement).value)
}
</script>