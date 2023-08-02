<template>
    <Talert title="ttt" type="success" center colorMode="is-light" @close="handleClose"></Talert>
</template>

<script lang="ts" setup>
import Talert from '../components/alert/alert.vue'
const handleClose = () => {
    console.log('close')
}

</script>