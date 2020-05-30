<template>
  <div class="components-container">
    <el-alert v-if="selected" title="您已选择课题" type="success" center show-icon></el-alert>
    <el-alert v-else title="您还未选择课题，请选择" type="info" center show-icon></el-alert>
    <!-- <el-button type="primary" round>主要按钮</el-button> -->
    <el-table :data="topicList" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column label="序号" type="index" width="100px"></el-table-column>
      <el-table-column prop="title" label="题目"></el-table-column>
      <el-table-column prop="direction" label="描述"></el-table-column>
      <el-table-column label="选择">
        <template slot-scope="props">
          <el-button v-if="selected || props.row.state==0 " type="primary" disabled>选择</el-button>
          <el-button v-else @click="buttonClick(props.row)" type="primary">选择</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-if="isSelected" title="自主命题" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="课题名称">
          <el-input v-model="topic.name"></el-input>
        </el-form-item>
        <el-form-item label="方向">
          <el-input v-model="topic.direction"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitTopic">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { isSelectedTopic, topicList, selectTopic } from "@/api/student";
import axios from "axios";

export default {
  data() {
    return {
      selected: false,
      dialogVisible: false,
      msg: "您还未选择课题",
      topicList: [],
      topic: {
        name: "",
        direction: ""
      }
    };
  },

  methods: {
    checkSelected() {
      return new Promise((resolve, reject) => {
        isSelectedTopic().then(response => {
          this.selected = response.data;
          if (this.selected) {
            this.msg = "您已选择课题";
          }
          resolve();
        });
      });
    },

    getTopicList() {
      return new Promise((resolve, reject) => {
        topicList().then(response => {
          this.topicList = response.data;
          console.log(response.data);
          resolve();
        });
      });
    },

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },

    buttonClick(row) {
      this.$confirm("选择" + row.title + ", 请确认", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios.all([selectTopic(row.id)]).then(response => {
            if (response[0].data) {
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
    },

    submitTopic() {
      this.dialogVisible = false;
    }
  },

  mounted: function() {
    this.checkSelected();
    this.getTopicList();
  }
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>