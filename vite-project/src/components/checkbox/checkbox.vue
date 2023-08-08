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
import { checkboxProps } from "./checkbox";
import { ref, computed } from "vue";

const props = defineProps(checkboxProps);
const emits = defineEmits(["change"]);

const model = computed(() => {});

const getLabeledValue = (value: string | number | boolean) => {
  return value === props.trueLabel || value === true
    ? props.trueLabel ?? true
    : props.falseLabel ?? false;
};

const handleChange = (event: Event) => {
  const checked = event.target.checked;
  console.log("🚀 ~ file: checkbox.vue:30 ~ handleChange ~ checked:", checked);
  currentValue.value = checked;
  const value = checked ? true : false;
  emits("update:modelValue", value);
  emits("change", value, event);
};

const currentValue = ref(props.modelValue);
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
