<template>
  <div>
     <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="_id"
        label="ID"
       >
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        >
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="createdAt"
        label="注册时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { users } from '@/api'
export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getUserLists()
  },
  methods: {
    getUserLists () {
      users().then((res) => {
        if (res.code === 0) {
          this.tableData = res.users
        }
      })
    }
  }
}
</script>

<style>

</style>
