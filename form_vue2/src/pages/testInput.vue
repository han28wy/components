<template>
  <div>
    <TInput
      v-model="values"
      :showWordLimit="true"
      :maxLength="20"
      disabled
    ></TInput>
    <div>当前值: {{ values }}</div>
  </div>
</template>

<script>
import TInput from '../components/input/input.vue'

export default {
  components: {
    TInput
  },
  data () {
    return {
      values: 'iuiuiu'
    }
  }
}
</script>
