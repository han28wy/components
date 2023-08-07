<template>
    <div>
        <span>checkboxGroup</span>
        <!-- <CheckboxGroup>
            <Checkbox></Checkbox>
        </CheckboxGroup> -->
        <span>checkbox</span>
        <Checkbox v-model="checked">备选项</Checkbox>
    </div>
</template>

<script lang="ts" setup>
import CheckboxGroup from '../components/checkbox-group/index.vue'
import Checkbox from '../components/checkbox/index.vue'

import { ref } from 'vue'
const checked = ref(true)
</script>sd