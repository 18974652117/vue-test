<template>
  <div> 
    <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-row>
      <el-button @click=" editDialogVisible=true"> 狮子头 </el-button>
    </el-row>

    <el-row>
      <el-button> 黄金糕 </el-button>
    </el-row>
  </el-dropdown-menu>

  <editPwd :editDialogVisible ="editDialogVisible"></editPwd>

  
</el-dropdown>
  </div>
</template>

<script>
import editPwd from './components/editPwd/editPwd.vue'
export default {
  components: {
    editPwd,
  },
  data(){
    return {
      editDialogVisible: false,
    }
  }
}
</script>

<style>

</style>