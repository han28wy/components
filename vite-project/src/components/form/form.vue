<template>
    <form>
        <slot></slot>
    </form>
</template>

<script setup lang="ts">
import { ref, reactive} from 'vue'

defineOptions({
  name: 'ElForm',
})

</script>