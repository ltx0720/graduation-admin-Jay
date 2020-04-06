<template>
  <div components-container>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id"></el-table-column>
      <el-table-column label="导师姓名" prop="name"></el-table-column>
      <el-table-column label="方向" prop="desc"></el-table-column>
      <el-table-column label="剩余名额" prop="num"></el-table-column>
      <el-table-column label="剩余时间" prop="num"></el-table-column>
      <el-table-column label="选择">
        <el-button type="success" icon="el-icon-ice-cream" circle></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ChoseTeacher",
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          num: "123",
          address: "上海市普陀区真北路",
          shop: "王小虎好滋好味鸡蛋仔好滋好味鸡蛋仔好滋好味鸡蛋仔好滋好味鸡蛋仔好",
          shopId: "10333"
        }
      ]
    }
  }
}
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
