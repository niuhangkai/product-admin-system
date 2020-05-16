<template>
    <el-aside width="230px">
      <div class="aside-container">
        <el-row>
          <el-col>
            <el-menu
              :router="true"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              active-text-color="#ffd04b"
              >
              <el-menu-item index="/menu/product">
                <i class="el-icon-menu"></i>
                  <span slot="title">
                    商品管理
                  </span>
              </el-menu-item>
              <el-menu-item index="/menu/category" >
                <i class="el-icon-document"></i>
                <span slot="title">
                  品类管理
                </span>
              </el-menu-item>
              <el-menu-item index="/menu/user">
                <i class="el-icon-menu"></i>
                  <span slot="title">
                    用户管理
                  </span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-aside>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.el-menu {
  border-right: none;
}
</style>
