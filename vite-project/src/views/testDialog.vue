<template>
<TDialog visible="true" title="填写模板内容详情" append-to-body @close="detailClose">
      <!-- <el-form :model="ruleForm" :rules="temValidate" ref="temValidate" label-width="100px" class="demo-ruleForm">
        <el-form-item label="模板名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入名称不超过30个字符" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="模板内容" prop="smsDetail">
          <el-button type="primary" @click="addVariable" size="mini">添加变量</el-button>
          <el-input
            type="textarea"
            maxlength="200"
            ref="smsDetail"
            :rows="3"
            show-word-limit
            v-model="ruleForm.smsDetail"
            placeholder="请填写模板内容"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailClose">取 消</el-button>
        <el-button type="primary" @click="onConfirm('temValidate')">保 存</el-button>
      </div> -->
    </TDialog>
</template>

<script lang="ts" setup>
import TDialog from '../components/dialog/dialog.vue'

const detailClose = () => {
  // 关闭弹窗
  console.log('关闭')
}
</script>