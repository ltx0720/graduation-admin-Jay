<template>
  <div components-container>
    <el-table :data="dataList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="导师简介">
              <span>{{ props.row.information }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="导师姓名" prop="teacher_name"></el-table-column>
      <el-table-column label="方向" prop="major"></el-table-column>
      <el-table-column label="剩余名额" prop="num"></el-table-column>
      <!-- <el-table-column label="剩余时间" prop="num"></el-table-column> -->
      <el-table-column label="选择">
        <el-button type="success" icon="el-icon-ice-cream" circle></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getSelectTeacher } from "@/api/student";

export default {
  name: "ChoseTeacher",
  data() {
    return {
      dataList: []
    };
  },

  methods: {
    getDataList: function() {
      return new Promise((resolve, reject) => {
        getSelectTeacher()
          .then(response => {
            this.dataList = response.data;
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },

  mounted: function() {
    this.getDataList();
  }
};
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
