<template>
  <div>
     <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
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
        prop="cerateTime"
        label="注册时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        id: '656a5s6a5s46a4x',
        name: '李四',
        email: '516595@qq.com',
        phone: 18696325636,
        cerateTime: '2020-05-06'
      }, {
        id: '656a5s6a5s46a4x',
        name: '李四',
        email: '516595@qq.com',
        phone: 18696325636,
        cerateTime: '2020-05-06'
      }, {
        id: '656a5s6a5s46a4x',
        name: '李四',
        email: '516595@qq.com',
        phone: 18696325636,
        cerateTime: '2020-05-06'
      }, {
        id: '656a5s6a5s46a4x',
        name: '李四',
        email: '516595@qq.com',
        phone: 18696325636,
        cerateTime: '2020-05-06'
      }, {
        id: '656a5s6a5s46a4x',
        name: '李四',
        email: '516595@qq.com',
        phone: 18696325636,
        cerateTime: '2020-05-06'
      }]
    }
  }
}
</script>

<style>

</style>
