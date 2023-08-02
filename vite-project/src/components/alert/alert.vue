<template>
    <div v-if="visible" role="alert" :class="className">
        <div>
            <div>{{ props.title }}</div>
            <div @click="closeBtn" class="el-alert__closebtn"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const className = computed(()=>{
    const {type, colorMode, center} = props
    return ['el-alert', `el-alert--${type}`, colorMode, center ? 'isCenter' : '']
})
const visible = ref(true)
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    title:{
        type: String,
        required: false,
    },
    type:{
        type: String,
        required: false,
        default: 'info'
    },
    colorMode:{
        type: String,
        required: false,
        default: 'is-light'
    },
    center: {
        type: Boolean,
        default: false
    },
    closable: {
    type: Boolean,
    default: true,
  },
})
const emits = defineEmits(['close'])
const closeBtn = (() => {
    visible.value = false
    emits('close')
})
</script>

<style>
.el-alert{
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    opacity: 1;
    display: flex;
    align-items: center;
    transition: opacity .2s;
}
.el-alert--success.is-light {
    background-color: #f0f9eb;
    color: #67c23a;
}
.el-alert--info.is-light {
    background-color: #f4f4f5;
    color: #909399;
}
.el-alert--warning.is-light {
    background-color: #fdf6ec;
    color: #e6a23c;
}
.el-alert--error.is-light {
    background-color: #fef0f0;
    color: #f56c6c;
}
.el-alert__closebtn::before{
    content: "\e6db";
}
.el-alert__closebtn {
    font-size: 12px;
    opacity: 1;
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
}
.isCenter {
    justify-content: center
}
</style>