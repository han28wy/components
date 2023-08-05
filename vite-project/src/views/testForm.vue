<template>
    <div>
    <TForm ref="formRef" :model="ruleForm" :rules="rules" label-width="120px">
        <TFormItem label="用户名" prop="username">
            <TInput v-model="ruleForm.username" />
        </TFormItem>
        <TFormItem label="手机号" prop="mobile">
            <TInput v-model="ruleForm.mobile"/>
        </TFormItem>
        <TFormItem label="性别" prop="sex">
            <TInput v-model="ruleForm.sex"/>
        </TFormItem>
        <TFormItem>
            <button @click="submitForm(formRef)">Submit</button>
            <button @click="resetForm(formRef)">Reset</button>
        </TFormItem>
    </TForm>
</div>
</template>

<script setup lang="ts">
import TInput from '../components/input/input.vue'
import TForm from '../components/form/form.vue'
import TFormItem from '../components/form/form-item.vue'

import { ref, reactive, watch } from  'vue'
const formRef = ref(null)
const ruleForm = reactive({
    username: '11',
    sex: '1',
    mobile: '123456'
})

const rules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    mobile: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    sex: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
}

const submitForm = (formEl: undefined) => {
//   if (!formEl) return
//   formEl.validate((valid) => {
//     if (valid) {
//       console.log('submit!')
//     } else {
//       console.log('error submit!')
//       return false
//     }
//   })
}

const resetForm = (formEl: undefined) => {
    try{
        console.log('我在reset')
    // formRef.value.resetFields()
//   if (!formEl) return
  formEl.resetFields()
    }catch (e) {
        console.log('我在catch ', e)
    }
    
}



</script>