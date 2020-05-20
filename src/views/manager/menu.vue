<template>
  <div class="app-container">
    <tree-table :data="menuList" :columns="columns" border @getAuth="getAuth"></tree-table>
  </div>
</template>
 
<script>
import treeTable from "@/components/TreeTableAuthor";
import { updateMenuState } from "@/api/manager";

export default {
  name: "treeTableDemo",
  components: { treeTable },
  data() {
    return {
      columns: [
        {
          text: "菜单列表",
          value: "name",
          option: "sonData1"
        }
      ],

      menuList: [
        {
          id: 1,
          name: "学生菜单",
          children: [
            {
              id: 1,
              group_id: 1,
              parentId: 0,
              type: 0,
              checkAll: true,
              name: "首页",
              children: [
                {
                  id: 2,
                  group_id: 1,
                  parentId: 1,
                  type: 1,
                  checkAll: true,
                  name: "首页",
                  children: null
                }
              ]
            },
            {
              id: 3,
              group_id: 1,
              parentId: 0,
              type: 0,
              checkAll: true,
              name: "选择导师",
              children: [
                {
                  id: 4,
                  group_id: 1,
                  parentId: 3,
                  type: 1,
                  checkAll: true,
                  name: "选择导师",
                  children: null
                }
              ]
            },
            {
              id: 5,
              group_id: 1,
              parentId: 0,
              type: 0,
              checkAll: true,
              name: "流程管理",
              children: [
                {
                  id: 6,
                  group_id: 1,
                  parentId: 5,
                  type: 1,
                  checkAll: true,
                  name: "选择课题",
                  children: null
                },
                {
                  id: 7,
                  group_id: 1,
                  parentId: 5,
                  type: 1,
                  checkAll: true,
                  name: "开题报告",
                  children: null
                },
                {
                  id: 8,
                  group_id: 1,
                  parentId: 5,
                  type: 1,
                  checkAll: true,
                  name: "毕设提交",
                  children: null
                }
              ]
            },
            {
              id: 9,
              group_id: 1,
              parentId: 0,
              type: 0,
              checkAll: true,
              name: "实时任务",
              children: [
                {
                  id: 10,
                  group_id: 1,
                  parentId: 9,
                  type: 1,
                  checkAll: true,
                  name: "审批管理",
                  children: null
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "教师菜单",
          children: []
        },
        {
          id: 3,
          name: "管理员菜单",
          children: []
        }
      ]
    };
  },
  created() {},
  methods: {
    getAuth(data) {
      let json = {};

      data.forEach(val => {
        if (val.children) {
          val.children.forEach(father => {
            if (father.children) {
              father.children.forEach(son => {
                json[son.id] = son.checkAll
                // map.set(son.id, son.checkAll);
              });
            }
          });
        }
      });
      console.log(json)
     
      this.test(json)
      // return map;
    },

    test(json){
      
       return new Promise((resolve, reject) => {
        updateMenuState(json)
          .then(response => {
            resolve();
          })
          
      });
    }
  }
};
</script>