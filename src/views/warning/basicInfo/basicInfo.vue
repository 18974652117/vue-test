<!--
 * @Author: your name
 * @Date: 2021-07-15 15:01:47
 * @LastEditTime: 2021-07-15 15:23:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \router\src\views\warning\basicInfo\basicInfo.vue
-->
<template>
  <div>
    <span>基本信息</span>
    <el-form :model="from" :rules="rules" ref="resFrom">
      <el-form-item label="新密码" prop="password" label-width="80px">
        <el-input v-model="from.password"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="passwords" label-width="80px">
        <el-input v-model="from.passwords"> </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      from: {
        password: '',
        passwords: ''
      },
      rules: {
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        passwords: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    validate(e){
      return this.$refs.resFrom.validate(e);
    }
  }
}
</script>

<style lang="less" scoped>

/deep/.el-input__inner{
  width: 250px;
}
</style>
