<template>
  <div>
    <el-form ref="form" :model="form" label-width="230px">
      <el-form-item label="商品名称" >
        <el-col :span="5">
          <el-input v-model="form.name"  disabled=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="商品描述" >
        <el-col :span="5">
          <el-input v-model="form.name" disabled></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="当前状态">
        <el-col :span="5">
          <el-select v-model="form.region" placeholder="请选择活动区域" disabled>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="所属分类">
        <el-col :span="5">
          <el-select v-model="form.region" placeholder="请选择活动区域" disabled>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-col :span="5">
          <el-input v-model="form.name" disabled></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="商品库存">
        <el-col :span="5">
          <el-input v-model="form.name" disabled></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="商品图片">
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
.el-select {
  display: block;
}
</style>
