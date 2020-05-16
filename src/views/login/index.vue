<template>
  <div class="login">
    <div class="login-container">
      <el-input v-model="username" placeholder="输入用户名" ></el-input>
      <el-input v-model="password" placeholder="输入密码"></el-input>
      <el-button type="primary"  @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      const { username, password } = this
      this.$router.push({
        path: '/menu/exportData',
        query: {
          username,
          password
        }
      })
    }
  }
}
</script>

<style >
</style>
