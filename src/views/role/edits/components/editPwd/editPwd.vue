<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="editDialogVisible"
      width="30%" >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "editPwd",

  props: {
    type: Boolean,
    require: true,
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>