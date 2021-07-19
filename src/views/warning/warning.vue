<!--
 * @Author: your name
 * @Date: 2021-07-15 15:01:47
 * @LastEditTime: 2021-07-15 15:24:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \router\src\views\warning\warning.vue
-->
<template>

  <div>
    <div>
      <el-button type="text" @click="resetPwd">重置密码</el-button>
      <!-- 重置密码弹框组件 -->
      <my-resetPwd @test="test" :showEditDialog = "showEditDialog"></my-resetPwd>
    </div>

    <div>
      <!-- 基本信息组件 -->
      <basic-info ref="resFrom"></basic-info>
      <buffer-info></buffer-info>

      <el-button>取消</el-button>
      <el-button @click="submit">保存</el-button>
    </div>
  </div>
</template>

<script>
import resetPwd from './resetPwd/resetPwd.vue'
import basicInfo from './basicInfo/basicInfo.vue'
import bufferInfo from './bufferInfo/bufferInfo.vue'
export default {
  name: 'warning', // 告警
  components: {
    'my-resetPwd': resetPwd,
    'basic-info': basicInfo,
    'buffer-info': bufferInfo
  },
  data () {
    return {
      showEditDialog: false
    }
  },
  methods: {
    test(e){
      this.showEditDialog = e;
    },
    closelDialog () {
    },
    /** 弹出密码框 */
    resetPwd () {
      this.showEditDialog = true;
    },

    /** 保存 */
    submit () {
      const res = this.$refs.resFrom

      this.$refs.resFrom.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>

</style>
