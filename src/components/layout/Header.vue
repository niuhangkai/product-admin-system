<template>
  <div class="header">
    <div class="header-container">
      <span> 欢迎您：{{ parseJson }} </span>
      <el-image :src="circleUrl" fit="fill"> </el-image>
      <el-dropdown @command="handleLogout">
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    const { $route: { query: { username, password } } } = this
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      color: '',
      username,
      password
    }
  },
  methods: {
    ...mapMutations(['LOGOUT']),
    handleLogout () {
      this.LOGOUT()
      this.$router.push({
        path: '/login'
      })
    }
  },
  computed: {
    ...mapGetters(['user']),
    parseJson () {
      return this.user.name
    }
  }
}
</script>

<style>
/* .header .el-avatar {
  margin-top: 10px;
}
.header .el-switch__core {
  margin-right: 20px;
}
.header .el-image {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.header-container {
  justify-content: flex-end;
  height: 60px;
  display: flex;
  align-items: center;

}
.header-container:nth-child(1) span {
  margin-right: 20px;
} */
</style>
