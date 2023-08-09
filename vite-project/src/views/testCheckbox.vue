<template>
    <div>
        <span>checkboxGroup</span>
        <CheckboxGroup v-model="checkboxGroup2" @change="handleChangeGroup" disabled>
            <Checkbox label="备选项1" border ></Checkbox>
            <Checkbox label="备选项2" border></Checkbox>
            <Checkbox label="备选项3" border></Checkbox>
            <Checkbox label="备选项4" border></Checkbox>
            <Checkbox label="备选项5" border></Checkbox>
        </CheckboxGroup>
        <button @click="alertGroup">按钮</button>
        <!-- <span>checkbox</span>
        <Checkbox v-model="checked" label="beixuan" border @change="handleChange"></Checkbox> -->
    </div>
</template>

<script lang="ts" setup>
import CheckboxGroup from '../components/checkbox/checkbox-group.vue'
import Checkbox from '../components/checkbox/checkbox.vue'
import { ref } from 'vue'

const checked = ref(true)
const checkboxGroup2 = ref(['备选项1','备选项3'])

const handleChange = () =>{
    console.log('gggg   ', checked.value)
}

const handleChangeGroup = ()=>{
    console.log('fffff')
}

const alertGroup = () => {
    console.log('999   ', checkboxGroup2.value)
}
</script>