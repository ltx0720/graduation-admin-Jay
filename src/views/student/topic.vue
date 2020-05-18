<template>
  <div class="components-container">
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="title" label="题目" width="180"></el-table-column>
      <el-table-column prop="direction" label="描述"></el-table-column>
      <el-table-column label="选择">
          <el-button type="success" icon="el-icon-ice-cream" circle></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  data() {
    return {
      tableData: [
        {
          id: "00001",
          title: "毕业设计管理系统",
          direction: "的就是卡拉就打开拉萨决定离开洒家离开的"
        }
      ]
    };
  }
};
</script>