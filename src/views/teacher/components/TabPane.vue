<template>
  <el-table :data="approveList" border fit highlight-current-row style="width: 100%">
    <el-table-column v-loading="loading" align="center" label="ID" type="index"></el-table-column>

    <el-table-column width="150px" align="center" label="申请人">
      <template slot-scope="scope">
        <span>{{ scope.row.student_name | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
      </template>
    </el-table-column>

    <el-table-column width="150px" align="center" label="班级">
      <template slot-scope="{row}">
        <span>{{ row.class_name }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" min-width="300px" label="审批意见">
      <template slot-scope="{row}">
        <template v-if="row.edit">
          <el-input v-model="row.opinion" class="edit-input" size="small" />
          <el-button class="cancel-btn" size="small" type="warning" @click="cancelEdit(row)">取消</el-button>
        </template>
        <span v-else>{{ row.opinion }}</span>
      </template>
    </el-table-column>

    <el-table-column v-if="state" align="center" label="编辑意见" width="120">
      <template slot-scope="{row}">
        <el-button v-if="row.edit" type="success" size="small" @click="confirmEdit(row)">确定</el-button>
        <el-button
          v-else
          type="primary"
          size="small"
          icon="el-icon-edit"
          @click="row.edit=!row.edit"
        >编辑</el-button>
      </template>
    </el-table-column>

    <el-table-column v-if="state" align="center" label="操作">
      <template slot-scope="{row}">
        <el-button type="success" size="mini" @click="approveHandle('pass', row.id)">通过</el-button>
        <el-button type="danger" size="mini" @click="approveHandle('refuse', row.id)">拒绝</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import { fetchList } from '@/api/article'
import { getTopicApprove, approceHandle } from "@/api/teacher";

export default {
  inject: ["reload"],
  props: {
    type: {
      type: String,
      default: "pending"
    }
  },
  data() {
    return {
      approveList: [],
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type
      },
      loading: false,
      state: "pending"
    };
  },
  created() {
    this.getApproveList();
  },
  mounted: function() {
    this.state = this.$route.query.tab == "pending" ? true : false;
  },

  methods: {
    getApproveList() {
      return new Promise((resolve, reject) => {
        getTopicApprove(this.listQuery.type).then(response => {
          const items = response.data;
          this.approveList = items.map(v => {
            this.$set(v, "edit", false);
            v.originalOpinion = v.opinion;
            return v;
          });
        });
      });
    },
    cancelEdit(row) {
      row.opinion = row.originalOpinion;
      row.edit = false;
      this.$message({
        message: "已取消审批意见的修改",
        type: "warning"
      });
    },
    confirmEdit(row) {
      row.edit = false;
      row.originalOpinion = row.opinion;
      this.$message({
        message: "已修改审批意见",
        type: "success"
      });
    },

    approveHandle(action, id) {
      return new Promise((resolve, reject) => {
        approceHandle(action, id).then(response => {
          let msg, type;
          if (response.data == "success") {
            msg = "操作成功";
            type = "success";
          } else {
            msg = "操作失败";
            type = "error";
          }

          this.$message({
            message: msg,
            type: type
          });
          this.timer = setTimeout(() => {
              this.$router.go(0);
          }, 1000);
       
        });
      });
    }
  }
};
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
