import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
Vue.use( Router )

export default new Router({
  routes: [

    { path: '/',           // 首页
      name: 'index', 
      component: index, 
    }, 
    { path: '/index',           // 首页
      name: 'index', 
      component: index, 
      redirect: '/index' ,
      children: [
        {
          path: '/warning',
          name: 'role',      // 角色
          component: () => import ('../views/warning/warning.vue'),
        },     
        
        {
          path: '/role',
          name: 'role',      // 角色
          component: () => import ('../views/role/role.vue'),
        },

        {
          path: '/edits',
          name: 'edits',      // 编辑
          component: () => import ('../views/role/edits/edits.vue'),
        },

        {
          path: '/pandect',
          name: 'pandect',
          component: () => import ('../views/pandect/pandect.vue'),
          redirect: '/pandect/admin',

          children:[
            { 
              path: 'admin',
              name: 'user',           // admin用户
              component: () => import('../views/pandect/admin/admin.vue'),
            },

            { 
              path: 'test',
              name: 'power',            // 测试用户
              component: () => import('../views/pandect/test/test.vue'),
            },
          ]
        },
      ]
    },         
  ]
})

