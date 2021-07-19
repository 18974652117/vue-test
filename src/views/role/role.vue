<template>
  <div> 
    <el-button @click="gotoEdit">
      跳入编辑
    </el-button>
    
  </div>
</template>

<script>
export default {
  name: 'role',     // 角色

  methods: {
    gotoEdit(){
      this.$router.push({
        path: '/edits',
        // query: '',
      })
    },
  }
}
</script>

<style>

</style>