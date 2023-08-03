<template>
    <button @click="detailOpen">打开</button>
    <div>没有关系dddd</div>
    <div>没有关系dddd</div>
    <div>没有关系dddd</div>
    <div>没有关系dddd</div>
  <TDialog
    :visible="visible"
    title="填写模板内容详情"
    append-to-body
    @close="detailClose"
  >
    <div>121212121212</div>
    <template v-slot:footer>
      <button @click="detailClose">取消</button>
    </template>
  </TDialog>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import TDialog from "../components/dialog/dialog.vue";

const visible = ref(true);

const detailOpen = (()=>{
    visible.value = true
})
const detailClose = () => {
  // 关闭弹窗
  console.log("关闭");
  visible.value = false
};

onMounted(() => {
  console.log(1111);
});
</script>
