<template>
  <div class="login">
    <div class="login-container">
      <el-input v-model="username" placeholder="输入用户名"></el-input>
      <el-input v-model="password" placeholder="输入密码"></el-input>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations({
      'USERS': 'USERS'
    }),
    handleLogin () {
      const { username, password, $router } = this
      login({
        name: username,
        password: password
      }).then((res) => {
        const { code, user } = res
        if (code === 0) {
          $router.push({
            path: '/menu/product'
          })
          this.USERS(res)
        }
      })
    }
  }
}
</script>

<style >
</style>
