<template>
    <TInput v-model="values" :value="values" @change="getChange" disabled></TInput>
</template>

<script setup lang="ts">
import TInput from '../components/input/input.vue'
import { ref, watch } from  'vue'

const values = ref('iuiuiu')

const getChange = (val)=>{
    console.log(val)
}
watch(values, (newV, oldV) => {
    console.log(newV)
    console.log(oldV)
})
</script>