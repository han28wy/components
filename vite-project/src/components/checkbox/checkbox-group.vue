<template>
    <div @change="handleChange">
      <input style="display:none" v-model="modelValue"/>
      <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { checkboxGroupProps } from "./checkbox-group";
import { computed, provide, toRefs } from 'vue'
import { checkboxGroupContextKey } from './constants'
import {pick} from 'lodash'

defineOptions:({
name:'ElCheckboxGroup'
})


const props = defineProps(checkboxGroupProps)
const emits = defineEmits(["change", "update:modelValue"])

const handleChange=(val) =>{
  console.log('checkbox  GGGroup', val, '    ', modelValue.value)
}
const modelValue = computed({ 
  get: () => {
    return props.modelValue;
  },
  set: (value:any) => {
    emits('update:modelValue', value);
    nextTick(() => {
      emits('change', value);
    });
  }
});
const changeEvent = (val: any) => {
  emits("update:modelValue", val);
  emits("change", val);
};

provide(checkboxGroupContextKey, {
  ...pick(toRefs(props), [
    'size',
    'min',
    'max',
    'disabled',
    'validateEvent',
    'fill',
    'textColor',
  ]),
  modelValue,
  changeEvent,
})


</script>