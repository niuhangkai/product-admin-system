<template>
  <div>
    <div v-if="$route.path === '/menu/product'">
    <el-input
      v-model="searchInput"
      placeholder="请输入内容"
      style="width:180px"
      size="small"
    ></el-input>
    <el-button type="primary" size="small" @click="handleSearchClick"
      >搜索</el-button>
      <el-button type="primary" size="small" @click="handleAddProduct"
      >添加商品</el-button>
    <el-table
      :data="productsData"
      stripe
      style="width: 100%"
    >
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="desc" label="描述"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="statusStr" label="状态"> </el-table-column>
      <el-table-column prop="action" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleShow(scope.$index, scope.row)"
          >
            查看
          </el-button>
          <el-button
            size="mini"
            type="success"
            @click="handleEdit(scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
          <el-button
            size="mini"
            type="info"
            @click="handleChange(scope.$index, scope.row)"
          >
          {{scope.row.status | statusText}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <router-view v-else></router-view>
  </div>
</template>
<script>
import {
  products,
  deleteProduct,
  changeProduct
} from '@/api'
export default {
  data () {
    return {
      searchInput: '',
      productsData: []
    }
  },
  props: {
    product: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.getProductLists()
  },
  methods: {
    handleAddProduct () {
      this.$router.push({
        path: '/menu/product/create'
      })
    },
    getProductLists (name) {
      products({
        name
      }).then(({ code, products }) => {
        if (code === 0) {
          this.productsData = products
        }
      })
    },
    handleChange (index, row) {
      changeProduct({
        status: row.status === 0 ? 1 : 0,
        id: row._id
      }).then((res) => {
        this.handleSearchClick()
      })
    },
    handleDelete (index, { _id }) {
      deleteProduct({
        id: _id
      }).then((res) => {
        this.handleSearchClick()
      })
    },
    handleEdit (index, {_id}) {
      this.$router.push({
        name: 'edit',
        params: {
          id: _id
        }
      })
    },
    handleShow (index, {_id}) {
      this.$router.push({
        name: 'detail',
        params: {
          id: _id
        }
      })
    },
    handleSearchClick () {
      this.getProductLists(this.searchInput)
    }
  },
  watch: {
    '$route': 'handleSearchClick'
  }
}
</script>

<style>
</style>
