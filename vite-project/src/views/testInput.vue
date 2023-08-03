<template>
    <TInput v-model="values"></TInput>
</template>

<script setup lang="ts">
import TInput from '../components/input/input'
import { ref } from  'vue'

const values = ref('iuiuiu')
</script>