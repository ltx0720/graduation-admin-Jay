<template>
  <div class="components-container">
    <el-button
      v-if="selectTeacherList.length == 0"
      type="primary"
      @click="dialogVisible = true"
      round
      icon="el-icon-plus"
      disabled
    >添加</el-button>
    <el-button v-else type="primary" @click="dialogVisible = true" round>添加</el-button>

    <el-table :data="showTeacherList" style="width: 100%">
      <el-table-column align="center" label="序号" type="index" width="100px"></el-table-column>
      <el-table-column align="center" prop="teacher_name" label="名称"></el-table-column>
      <el-table-column align="center" prop="major" label="方向"></el-table-column>
      <el-table-column align="center" prop="num" label="当前已选"></el-table-column>
      <el-table-column align="center" prop="account" label="总名额"></el-table-column>
      <el-table-column align="center" prop="state" label="标签">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.state" type="success">学生端可见</el-tag>
          <el-tag v-else type="danger">学生端不可见</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="props">
          <el-button v-if="props.row.state" @click="changeState(props.row.id, 0)" type="primary">禁用</el-button>
          <el-button v-else @click="changeState(props.row.id, 1)" type="primary">启用</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加导师" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="选择导师">
          <el-select
            v-model="form.teacher_name"
            value-key="id"
            placeholder="选择教师"
            @change="pickTeacher"
          >
            <el-option
              v-for="teacher in selectTeacherList"
              :key="teacher.id"
              :label="teacher.teacher_name"
              :value="teacher.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item
          label="学生数量"
          prop="account"
          :rules="[
                    { required: true, message: '数量不能为空'},
                    { type: 'number', message: '数量必须为数字值'}
                  ]"
        >
          <el-input type="account" v-model.number="form.account" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="开启选择">
          <el-switch v-model="form.state"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary" @click="submitTeacher">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getShowTeacherList,
  getSelectTeacherList,
  submitTeacher,
  changeState
} from "@/api/manager";
import { Message } from "element-ui";
import store from "../../store";

export default {
  data() {
    return {
      showTeacherList: [],
      selectTeacherList: [],
      form: {
        teacher_id: "",
        teacher_name: "",
        account: "",
        state: false
      },
      dialogVisible: false
    };
  },

  methods: {
    getShowList() {
      return new Promise((resolve, reject) => {
        getShowTeacherList().then(response => {
          this.showTeacherList = response.data;
          resolve();
        });
      });
    },

    filterTag(value, row) {
      alert(row.state === value);
      return row.state === value;
    },

    submitTeacher() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          return new Promise((resolve, reject) => {
            submitTeacher(this.form).then(response => {
              selectTeacherList.filter(p => {
                if (p.id == this.from.id) {
                  p.state = true;
                }
              });
              this.message(true, "添加成功");
              setTimeout(() => {
                this.$router.go(0);
              }, 700);
            });
          });
        } else {
          this.message(false, "输入不符合格式");
          return false;
        }
      });
    },

    getSelectList() {
      return new Promise((resolve, reject) => {
        getSelectTeacherList().then(response => {
          this.selectTeacherList = response.data;
          resolve();
        });
      });
    },

    pickTeacher(id) {
      this.form.teacher_id = id;
    },

    changeState(id, state) {
      return new Promise((resolve, reject) => {
        changeState(id, state).then(response => {
          let success = response.data;
          let msg = success ? "操作成功" : "操作失败";
          this.message(success, msg);
          setTimeout(() => {
            this.$router.go(0);
          }, 700);
          resolve();
        });
      });
    },

    message(success, msg) {
      if (success) {
        Message.success({
          showClose: true,
          message: msg,
          type: "success"
        }).alert;
      } else {
        Message.error({
          showClose: true,
          message: msg,
          type: "error"
        }).alert;
      }
    }
  },

  mounted: function() {
    this.getShowList();
    this.getSelectList();
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