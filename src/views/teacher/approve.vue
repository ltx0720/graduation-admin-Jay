<template>
  <div class="components-container">
    <el-table v-loading="listLoading" :data="list" highlight-current-row>
      <el-table-column align="center" label="序号">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="姓名">
        <template slot-scope="{row}">
          <span>{{ row.name}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="学号">
        <template slot-scope="{row}">
          <span>{{ row.number }}</span>
        </template>
      </el-table-column>

      <el-table-column label="班级">
        <template slot-scope="{row}">
          <span>{{ row.class}}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="课题">
        <template slot-scope="{row}">
          <span>{{ row.class}}</span>
        </template>
        <!-- <el-tag :type="row.status | statusFilter">{{ row.top }}</el-tag> -->
        <!-- </template> -->
      </el-table-column>

      <el-table-column class-name="status-col" label="审批意见" width="700">
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input v-model="row.comment" class="edit-input" size="small" style="width: 200px" />
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
              style="float: right"
            >取消</el-button>
          </template>
          <span v-else>{{ row.comment }}</span>
          
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
             style="float: right; margin-right:80px"
          >确定</el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit=!row.edit"
            style="float: right"
          >编辑</el-button>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作">
        <!-- <template slot-scope="{row}"> -->
        <el-button size="mini">通过</el-button>
        <el-button size="mini" type="danger">退回</el-button>
        <!-- </template> -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'

export default {
  name: "InlineEditTable",
  //   filters: {
  //     statusFilter(status) {
  //       const statusMap = {
  //         published: "success",
  //         draft: "info",
  //         deleted: "danger"
  //       };
  //       return statusMap[status];
  //     }
  //   },
  data() {
    return {
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10
      },
      list: [
        {
          name: "六点就",
          number: "16110732190",
          class: "软件1601",
          id: 1,
          topic: "毕业设计管理系统",
          comment: "12",
          edit: false,
         originalTitle: '12'
        },
        {
          name: "六点就",
          numner: "16110732190",
          class: "软件1601",
          id: 1,
          topic: "毕业设计管理系统",
          comment: ""
        }
      ]
    };
  },
  methods: {
    // getList() {
    //   //   this.listLoading = true
    //   //   const { data } = await fetchList(this.listQuery)
    //   //   const items = data.items
    //   //   this.list = items.map(v => {
    //   //     this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
    //   //     v.originalTitle = v.title //  will be used when user click the cancel botton
    //   //     return v
    //   //   })
    //   // this.listLoading = false
    // },
        cancelEdit(row) {
          row.comment = row.originalComment;
          row.edit = false;
          this.$message({
            message: "已取消审批意见的修改",
            type: "warning"
          });
        },
        confirmEdit(row) {
          row.edit = false;
          row.originalComment = row.comment;
          this.$message({
            message: "已修改审批意见",
            type: "success"
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
