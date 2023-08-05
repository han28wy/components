<template>
  <form>
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, provide} from 'vue'

defineOptions({
  name: 'ElForm',
})

const fields = ref([]);
const addField = (field:any) => {
  console.log('我在add', field)
    if (field) {
      fields.value.push(field);
    }
    };

const removeField = (field:any) => {
  console.log('我在remove')
    if (field.prop) {
        const index = fields.value.indexOf(field);
        if (index !== -1) {
          fields.value.splice(index, 1);
        }
      }
    };

provide('addField', addField)
provide('removeField', removeField)
</script>
