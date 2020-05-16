<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容" style="width:180px" size="small"></el-input>
    <el-button type="primary" size="small">搜索</el-button>
     <el-table
       v-if="$route.path === '/menu/product'"
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
       >
      </el-table-column>
      <el-table-column
        prop="desc"
        label="描述"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
       <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
       <el-table-column
        prop="action"
        label="操作">
        <template slot-scope="scope">
          <el-button
          size="mini"
          type="primary"
          @click="handleShow(scope.$index, scope.row)">
          查看
        </el-button>
        <el-button
          size="mini"
          type="success"
          @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">
          删除
        </el-button>
        <el-button
          size="mini"
          type="info"
          @click="handleChange(scope.$index, scope.row)">
          上架
        </el-button>
      </template>
      </el-table-column>
    </el-table>
    <router-view v-else></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        name: '小米手机',
        desc: '你的下一台电脑何必是电脑',
        price: 500,
        status: 0
      },
      {
        name: '小米手机',
        desc: '你的下一台电脑何必是电脑',
        price: 500,
        status: 0
      },
      {
        name: '小米手机',
        desc: '你的下一台电脑何必是电脑',
        price: 500,
        status: 0
      },
      {
        name: '小米手机',
        desc: '你的下一台电脑何必是电脑',
        price: 500,
        status: 0
      },
      {
        name: '小米手机',
        desc: '你的下一台电脑何必是电脑',
        price: 500,
        status: 0
      }]
    }
  },
  props: {
    product: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange () {

    },
    handleDelete () {

    },
    handleEdit () {
      this.$router.push({
        name: 'edit',
        params: {
          id: Math.random()
        }
      })
    },
    handleShow () {
      this.$router.push({
        name: 'detail',
        params: {
          id: Math.random()
        }
      })
    }
  }
}
</script>

<style>

</style>
