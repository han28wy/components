<template>
    <TInput v-model="values" disabled></TInput>
    <div>当前值:  {{ values }}</div>
</template>

<script setup lang="ts">
import TInput from '../components/input/input.vue'
import { ref, watch } from  'vue'

const values = ref('iuiuiu')

watch(values, (newV, oldV) => {
    // 没有进入watch方法
console.log("🚀 ~ file: testInput.vue:15 ~ watch ~ oldV:", oldV)
console.log("🚀 ~ file: testInput.vue:15 ~ watch ~ newV:", newV)
})
</script>