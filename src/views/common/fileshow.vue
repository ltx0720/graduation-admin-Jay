<template>
  <div class="custom-tree-container">
    <el-tree :data="fileList" :props="defaultProps">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span v-if="show(data)" @click="test">{{ node.label }}</span>
        <span v-else>{{ node.label }}</span>
      </span>
    </el-tree>
  </div>
</template>

<script>
import { getVisibleFileList } from "@/api/file-server/api";

export default {
  data() {
    return {
      fileList: [],
      defaultProps: {
        children: "children",
        label: "file_name"
      }
    };
  },
  methods: {
    getData() {
      return new Promise((resolve, reject) => {
        getVisibleFileList()
          .then(response => {
            console.log(response.data);
            this.fileList = response.data;
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    handleNodeClick(data) {
      console.log(data);
    },
    download(data) {
      console.log(data.url);
    },
    test() {
      alert("test");
    },
    show(data) {
      return data.url != "";
    }
  },

  mounted: function() {
    this.getData();
  }
};
</script>

<style>
.custom-tree-container {
  padding-left: 50px;
  margin-top: 20px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14x;
  font-weight: bold;
}
</style>
