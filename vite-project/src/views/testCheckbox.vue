<template>
    <div>
        <span>checkboxGroup</span>
        <CheckboxGroup v-model="checkboxGroup2" disabled>
            <Checkbox label="备选项1" border></Checkbox>
            <Checkbox label="备选项2" border></Checkbox>
        </CheckboxGroup>
        <!-- <span>checkbox</span>
        <Checkbox v-model="checked" label="beixuan" border></Checkbox> -->
    </div>
</template>

<script lang="ts" setup>
import CheckboxGroup from '../components/checkbox/checkbox-group.vue'
import Checkbox from '../components/checkbox/checkbox.vue'
import { ref } from 'vue'

const checked = ref(true)
const checkboxGroup2 = ref(false)
</script>