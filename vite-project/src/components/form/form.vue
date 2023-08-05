<template>
  <form>
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, provide} from 'vue'
import { formContextKey } from './constants'
import { formEmits, formProps } from './form'
import { filterFields} from './utils'

defineOptions({
  name: 'ElForm',
})

const props = defineProps(formProps)
const emit = defineEmits(formEmits)

const fields = ref([]);
const addField = (field:any) => {
    if (field) {
      fields.value.push(field);
    }
  };

const removeField = (field:any) => {
  console.log('我在remove')
    if (field.prop) {
        const index = fields.value.indexOf(field);
        if (index !== -1) {
          fields.value.splice(index, 1);
        }
      }
    };

const resetFields = (properties = []) =>{
  console.log('1111111111111')
  if(!props.model){
    console.log('不能继续执行这个操作')
    return
  }
  const res1 = filterFields(fields, properties)
  debugger
  console.log("🚀 ~ file: form.vue:43 ~ resetFields ~ res1:", res1)
}
const clearValidate = () =>{}
const validateField= () =>{}

provide(
  formContextKey,
  reactive({
    ...toRefs(props),
    emit,
    resetFields,
    clearValidate,
    validateField,
    addField,
    removeField,
    // ...useFormLabelWidth(),
  })
)
defineExpose({
  /**
   * @description Validate the whole form. Receives a callback or returns `Promise`.
   */
  // validate,
  /**
   * @description Validate specified fields.
   */
  validateField,
  /**
   * @description Reset specified fields and remove validation result.
   */
  resetFields,
  /**
   * @description Clear validation message for specified fields.
   */
  clearValidate,
  /**
   * @description Scroll to the specified fields.
   */
  // scrollToField,
})
</script>
