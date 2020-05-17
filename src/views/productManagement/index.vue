<template>
  <div>
    <el-input
      v-model="searchInput"
      placeholder="请输入内容"
      style="width:180px"
      size="small"
    ></el-input>
    <el-button type="primary" size="small" @click="handleSearchClick"
      >搜索</el-button
    >
    <el-table
      v-if="$route.path === '/menu/product'"
      :data="productsData"
      stripe
      style="width: 100%"
    >
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="desc" label="描述"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
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
            上架
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <router-view v-else></router-view>
  </div>
</template>
<script>
import {
  products,
  deleteProduct
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
    getProductLists (name) {
      products({
        name
      }).then(({ code, products }) => {
        if (code === 0) {
          products.map((v) => v.status === 0 ? v.status = '下架' : v.status = '在售')
          this.productsData = products
        }
      })
    },
    handleChange () {

    },
    handleDelete (index, { _id }) {
      deleteProduct({
        id: _id,
        n: 465
      }).then((res) => {
        this.handleSearchClick()
      })
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
    },
    handleSearchClick () {
      this.getProductLists(this.searchInput)
    }
  }
}
</script>

<style>
</style>
