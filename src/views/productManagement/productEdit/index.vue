<template>
  <div>
    <el-form ref="form" :model="form" label-width="230px">
      <el-form-item label="商品名称" >
        <el-col :span="5">
          <el-input v-model="form.name"  ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="商品描述" >
        <el-col :span="5">
          <el-input v-model="form.desc" ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="当前状态">
        <el-col :span="5">
          <el-select v-model="form.status" placeholder="当前状态" >
            <el-option label="下架" :value="0"></el-option>
            <el-option label="在售" :value="1"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <!-- <el-form-item label="所属分类">
        <el-col :span="5">
          <el-select v-model="form.category" placeholder="所属分类" >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-col>
      </el-form-item> -->
      <el-form-item label="商品价格">
        <el-col :span="5">
          <el-input v-model="form.price" ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="商品库存">
        <el-col :span="5">
          <el-input v-model="form.inventory" ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  productDetail,
  changeProduct
} from '@/api'
export default {
  data () {
    return {
      form: {
        name: '',
        desc: '',
        status: 0,
        // category: '',
        price: '',
        inventory: ''
      }
    }
  },
  created () {
    this.getDetail(this.$route.params.id)
  },
  methods: {
    onSubmit () {
      const form = this.form
      changeProduct(form).then(res => {
        if (res.code === 0) {
          this.$router.push({
            path: '/menu/product'
          })
        }
      })
    },
    getDetail (id) {
      productDetail({
        id
      }).then(({code, product}) => {
        if (code === 0) {
          for (let key in product) {
            this.form[key] = product[key]
          }
        }
      })
    }
  }
}
</script>

<style>
.el-select {
  display: block;
}
</style>
