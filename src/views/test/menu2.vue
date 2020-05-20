<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column
        v-for="(item,index) in tableList"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      ></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="primary"
            size="mini"
            v-if="!scope.row.date"
          >编辑</el-button>
          <el-button
            @click="downloadImg(scope.row)"
            type="text"
            size="small"
            v-if="!scope.row.date"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      tableList: [
        {
          label: "分类",
          prop: "category"
        },
        {
          label: "菜单功能",
          prop: "menu"
        },
        {
          label: "状态",
          prop: "state"
        }
      ],
      tableData: [
        {
          id: 1,
          category: "学生",
          children: [
            {
              id: 11,
              menu: "选择导师",
              state: "生效"
            },
            {
              id: 11,
              menu: "选择导师",
              state: "生效"
            }
          ]
        },
        {
          id: 2,
          category: "导师",
          children: [
            {
              id: 31,
              menu: "第二根半价套餐",
              state: "生效"
            }
          ]
        },

        {
          id: 3,
          category: "管理员",
          children: [
            {
              id: 31,
              menu: "第二根半价套餐",
              state: "生效"
            },
            {
              id: 41,
              category: "第二根半价套餐",
              menu: "是兄弟就来割",
              state: "无痛"
            }
          ]
        }
      ]
    };
  }
};
</script>