<!--
 * @Author: your name
 * @Date: 2021-07-15 15:01:47
 * @LastEditTime: 2021-07-15 15:14:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \router\src\views\warning\resetPwd\resetPwd.vue
-->
<template>
  <!-- 重置密码弹框 -->
  <el-dialog title="重置密码" @close="close" :visible.sync="showEditDialog" class="resetPwd">
    <el-divider></el-divider>

    <!-- 登录表单区域 ref：获取组件实例对象 或 表单引用对象。 rules：验证规则。 :model： 属性绑定。 -->
    <el-form class="demo-ruleForm">
      <el-form-item label="新密码" prop="password" label-width="80px">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="passwords" label-width="80px">
        <el-input> </el-input>
      </el-form-item>
    </el-form>
    <!-- 底部 -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary">
        确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "resetPwd", // 重置密码
  props: {
    showEditDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  },
  methods: {
    close() {
      this.$emit("test",false);
    }
  }
};
</script>
