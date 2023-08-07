<template>
    <label class="el-checkbox" :class="{'is-bordered': props.border}">
        <span>
            <input type="checkbox" @change="handleChange"/>
        </span>
        <span>{{props.label}}</span>
    </label>
</template>

<script lang="ts" setup>
import {checkboxProps} from './checkbox'

const props = defineProps(checkboxProps);
const emits = defineEmits(['change']);

const handleChange = () => {
    emits('change')
}



</script>

<style>
.el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
}
.is-bordered{
    padding: 9px 20px 9px 10px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    line-height: normal;
    height: 40px;
}
</style>
