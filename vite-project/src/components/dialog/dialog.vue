<template>
    <div v-show="props.visible" class="el-dialog_wrapper">
        <div role="dialog" ref="dialog">
            <div>
                <slot name="title">
                    <span>{{ props.title }}</span>
                </slot>
            </div>
            <!-- body -->
            <div></div>

        </div>

    </div>

</template>

<script lang="ts" setup>
import { dialogProps } from './dialog-prop'

const props = defineProps(dialogProps)
console.log(props.title)
console.log(props.visible)

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
</style>