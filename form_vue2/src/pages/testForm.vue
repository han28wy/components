<template>
  <div>
    <TForm ref="form" :model="form">
      <TFormItem label="活动名称" prop="name">
        <TInput v-model="form.name"></TInput>
      </TFormItem>
      <TFormItem label="活动名称" prop="mobile">
        <TInput v-model="form.mobile"></TInput>
      </TFormItem>
      <TFormItem label="活动名称" prop="date1">
        <TInput v-model="form.date1"></TInput>
      </TFormItem>
      <TFormItem>
        <button @click="onSubmit">立即创建</button>
        <button @click="resetForm()">重置</button>
      </TFormItem>
    </TForm>
  </div>
</template>

<script>
import TForm from '../components/form/form.vue'
import TFormItem from '../components/form/form-item.vue'
import TInput from '../components/input/index.vue'
export default {
  components: {
    TForm,
    TFormItem,
    TInput
  },
  data () {
    return {
      form: {
        name: 'name',
        mobile: '12345',
        date1: 'sss',
        date2: 'aaaa',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    resetForm () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
