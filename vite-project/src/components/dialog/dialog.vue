<template>
    <div role="dialog" v-show="props.visible" class="el-dialog_wrapper">
        <div role="dialog" ref="dialog" style="margin-top:15vh; width:50%" :class="className">
            <div class="el-dialog_header">
                <slot name="title">
                    <span class="el-dialog_title">{{ props.title }}</span>
                    <div class="close_btn" />
                </slot>
            </div>
            <!-- body -->
            <div class="el-dialog_body">
                <slot></slot>
            </div>
            <!-- footer -->
            <!-- <div class="el-dialog_footer">
                <slot name="footer"></slot>
            </div> -->
            <template>
                <slot name="footer" />
            </template>
        </div>

    </div>

</template>

<script lang="ts" setup>
import { dialogProps } from './dialog-prop'
import { computed, ref } from 'vue'

const props = defineProps(dialogProps)

const className = computed(()=>{
    const { fullscreen, center} = props
    return ['el-dialog',{'is-fullscreen': fullscreen, 'el-dialog--center': center}]
})

</script>

<style>
.el-dialog_wrapper{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
.el-dialog{
    /* margin-top: 15vh;
    width: 30%; */
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
}
.el-dialog_header{
    padding: 20px 20px 10px;
}
.el-dialog_title{
    line-height: 24px;
    font-size: 18px;
    color: #303133;
}
.close_btn::before{
    content: "\e6db";
}
.close_btn{
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
}
.el-dialog_footer{
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
}
</style>