<template>
  <div>
     <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="品类名称"
       >
      </el-table-column>
       <el-table-column
        prop="action"
        label="操作">
        <template slot-scope="scope">
          <el-button
          size="mini"
          type="primary"
          @click="handleShow(scope.$index, scope.row)">
          查看子分类
        </el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        name: '小米手机'
      },
      {
        name: '小米手机'
      },
      {
        name: '小米手机'
      },
      {
        name: '小米手机'
      },
      {
        name: '小米手机'
      }]
    }
  },
  methods: {
    handleShow () {

    }
  }
}
</script>

<style>

</style>
