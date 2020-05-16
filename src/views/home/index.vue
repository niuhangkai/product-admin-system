<template>
  <div class="home">
    <el-container>
      <router-view name="aside"></router-view>
      <el-container>
        <el-header>
          <router-view name="header"></router-view>
        </el-header>
        <el-main>
          <router-view name="main"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    pageSkinGetter () {
      return this.$store.getters.pageSkinGetter()
    }
  }
}
</script>

<style>
</style>
