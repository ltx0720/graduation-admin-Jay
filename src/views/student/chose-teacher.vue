<template>
  <div class="components-container">
    <aside>选择导师</aside>
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
      <el-table-column label="序号" type="index" width="100px"></el-table-column>
      <el-table-column label="导师姓名" prop="teacher_name"></el-table-column>
      <el-table-column label="研究方向" prop="major"></el-table-column>
      <el-table-column label="剩余名额" prop="num"></el-table-column>
      <!-- <template slot-scope="props"> -->
      <el-table-column label="选择">
        <template slot-scope="props">
          <el-button v-if="selected || props.row.num<=0" type="primary" disabled>选择</el-button>
          <el-button v-else type="primary" @click="buttonClick(props.row)">选择</el-button>
        </template>
      </el-table-column>
      <!-- </template> -->
    </el-table>
  </div>
</template>

<script>
import { getSelectTeacher, isSelected, selectTeacher } from "@/api/student";

export default {
  name: "ChoseTeacher",
  data() {
    return {
      dataList: [],
      selected: false //是否已选择导师
    };
  },

  methods: {
    checkSelected() {
      return new Promise((resolve, reject) => {
        isSelected().then(response => {
          this.selected = response.data;
          resolve();
        });
      });
    },

    getDataList() {
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
    },

    selectTeacher(teacher_id) {
      return new Promise((resolve, reject) => {
        selectTeacher(teacher_id).then(response => {
          resolve(response.data);
        });
      });
    },

    buttonClick(row) {
      console.log(row);
      this.$confirm("选择" + row.teacher_name + ", 请确认", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          new Promise(resolve => {
            selectTeacher(row.teacher_id).then(res => {
              resolve(res);
            });
          }).then(res => {
            if (res) {
              this.$message({
                type: "success",
                message: "选择成功!"
              });

              this.timer = setTimeout(() => {
                this.$router.go(0);
              }, 700);
            } else {
              this.$message({
                type: "error",
                message: "选择失败，请刷新后重新选择!"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消选择"
          });
        });
    }
  },

  mounted: function() {
    this.checkSelected();
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
