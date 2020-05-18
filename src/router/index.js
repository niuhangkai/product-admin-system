import Vue from 'vue'
import Router from 'vue-router'
import Aside from '@/components/layout/Aside'
import Main from '@/components/layout/Main'
import Header from '@/components/layout/Header'
import Home from '@/views/home/index'
import Category from '@/views/categoryManagement'
import User from '@/views/userManagement'
import Product from '@/views/productManagement'
import Login from '@/views/login'
import ProductDetail from '@/views/productManagement/productDetail'
import ProductEdit from '@/views/productManagement/productEdit'
import ProductAdd from '@/views/productManagement/ProductAdd'
import { getToken } from '@/utils/auth'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: 'menu',
        name: 'Menu',
        components: {
          main: Main,
          aside: Aside,
          header: Header
        },
        children: [{
          path: 'product',
          name: 'product',
          component: Product,
          meta: {
            title: '商品管理'
          },
          children: [{
            path: 'detail/:id',
            name: 'detail',
            component: ProductDetail,
            meta: {
              title: '商品详情'
            }
          },
          {
            path: 'edit/:id',
            name: 'edit',
            component: ProductEdit,
            meta: {
              title: '商品编辑'
            }
          },
          {
            path: 'create',
            name: 'create',
            component: ProductAdd,
            meta: {
              title: '添加商品'
            }
          }]
        },
        {
          path: 'category',
          name: 'category',
          component: Category,
          meta: {
            title: '品类管理'
          }
        },
        {
          path: 'user',
          name: 'User',
          component: User,
          meta: {
            title: '用户管理'
          }
        }]
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // this route requires auth, check if logged in
  // if not, redirect to login page.
  if (getToken()) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})

export default router
