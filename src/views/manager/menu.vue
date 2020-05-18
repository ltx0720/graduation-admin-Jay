<template>
  <div class="app-container">
    <tree-table :data="data" :columns="columns" border @getAuth="getAuth"></tree-table>
  </div>
</template>
 
<script>
import treeTable from "@/components/TreeTableAuthor";

export default {
  name: "treeTableDemo",
  components: { treeTable },
  data() {
    return {
      columns: [
        {
          text: "菜单列表",
          value: "description",
          option: "sonData1"
        }
      ],
      data: [
        {
          id: "1",
          description: "学生菜单管理",
          children: [
            {
              type: 1,
              id: 6,
              description: "用户列表",
              parentId: "-1",
              checkAll: true,
            },
            {
              type: 1,
              id: 13,
              description: "角色列表",
              parentId: "-1",
              checkAll: false
            }
          ]
        },

        {
          id: "2",
          description: "教师菜单管理",
          children: []
        },

          {
          id: "3",
          description: "管理员菜单",
          children: []
        }
      ]
    };
  },
  created() {},
  methods: {
    getAuth(data) {
      let opt = [];
      data.forEach(val => {
        opt.push(val.id);
        if (val.children) {
          val.children.forEach(el => {
            console.log(val.id);
            if (el.selectchecked.length) {
              opt.push(el.id);
              opt.push(el.selectchecked);
            }
          });
        }
      });
      console.log(data);
      opt = opt
        .join()
        .split(",")
        .filter(n => {
          return n;
        });
      console.log(opt);
    }
  }
};
</script>