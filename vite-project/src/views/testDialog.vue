<template>
<TDialog :visible="visible" title="填写模板内容详情" append-to-body @close="detailClose">
      <div>121212121212</div>
      <span slot="footer">
        <button @click="detailClose">取消</button>
      </span>
    </TDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TDialog from '../components/dialog/dialog.vue'

const visible = ref(true)

const detailClose = () => {
  // 关闭弹窗
  console.log('关闭')
}
</script>