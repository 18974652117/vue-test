<template>
 <el-container>
   <!-- 头部 -->
  <el-header></el-header>

  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="200px">
      <el-menu
        :default-active="$route.path"
        :router="true" >

         <el-menu-item index="/warning" >
          <span slot="title">告警</span>
        </el-menu-item>
        <el-menu-item index="/role" >
          <span slot="title">角色</span>
        </el-menu-item>
        <!-- 一级路由 -->
        <el-submenu index="/pandect/admin"> 
          <template slot="title">
            <span>权限</span>
          </template>
        
          
          <el-menu-item index="/pandect/admin">
            <template>
              <span>admin用户</span>
            </template>
          </el-menu-item>

          <el-menu-item index="/pandect/test">
            <template>
              <span> test用户</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <!-- 主题区 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'home',       // 首页
  methods: {
    report(){
      this.$router.push()
    }
  }
}
</script>
