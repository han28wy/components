<template>
  <label class="el-checkbox" :class="{ 'is-bordered': props.border }">
    <span>
      <input
        v-model="model"
        :value="props.label"
        :true-value="props.trueLabel"
        :false-value="props.falseLabel"
        :checked="currentValue"
        type="checkbox"
        @change="handleChange"
      />
    </span>
    <span>{{ props.label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { checkboxGroupContextKey } from './constants'
import { checkboxProps } from "./checkbox";
import { checkboxConfig } from './methods'
import { ref, inject, computed, getCurrentInstance, onMounted } from 'vue';
import { xor } from 'lodash-es';

defineOptions:({
name:'ElCheckbox'
})

const props = defineProps(checkboxProps);
const emits = defineEmits(["change", "update:modelValue"]);

const handleChange = (event: Event) => {
  const checked = event.target.checked;
  currentValue.value = checked;
  const value = checked ? true : false;
  updateModelValue(value)
};



function updateModelValue(value:any) {
    if(isGroup){
     var updateList = updateListA(props.label, groupValue)
     console.log("🚀  updateList:", updateList)
     emits("update:modelValue", updateList);
     emits("change", updateList);
    }else{
        emits("update:modelValue", value);
        emits("change", value);
    }
}

function updateListA(target, list) {
  if (list.includes(target)) {
    // 如果列表中已包含目标元素，则移除目标元素
    return list.filter(item => item !== target);
  } else {
    // 如果列表中不包含目标元素，则添加目标元素
    return [...list, target]
  }
}

const currentValue = ref(props.modelValue);


const checkboxGroup = inject(checkboxGroupContextKey, undefined)
const isGroup = checkboxGroup !== undefined
const groupValue = checkboxGroup?.modelValue?.value
if(groupValue.indexOf(props.label) > -1){
        updateModelValue(props.label)
        currentValue.value = true
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
.is-bordered {
  padding: 9px 20px 9px 10px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  line-height: normal;
  height: 40px;
}
</style>
