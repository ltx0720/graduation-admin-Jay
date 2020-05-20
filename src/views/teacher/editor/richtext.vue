<template>
  <div class="components-container">
    <aside>使用富文本编辑器编辑任务</aside>
    <el-input type="text" placeholder="请输入标题" v-model="news.title" maxlength="20" show-word-limit></el-input>
    <div style="margin-top: 20px">
      <tinymce v-model="news.content" :height="470" />
    </div>
    <div>
      <el-button @click="publish" type="primary" plain class="btn-publish">点击发布</el-button>
    </div>

    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { teacherPublish } from "@/api/common";

export default {
  name: "TinymceDemo",
  components: { Tinymce },
  data() {
    return {
      news: {
        content: `<h1 style="text-align: center;">标题!</h1><p style="text-align: center; font-size: 15px;">
      <ul>
        <li>One </li>
        <li>Two</li>
        <li>Three</li>
      </ul>`,
        title: ""
      }
    };
  },

  methods: {
    publish: function() {
      return new Promise((resolve, reject) => {
        teacherPublish(this.content)
          .then(response => {
            this.msg();
            this.$router.push({
              path: "/teacher/home",
              query: this.otherQuery
            });
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    msg() {
      this.$message({
        message: "发布成功",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
.editor-content {
  margin-top: 90px;
}

.btn-publish {
  width: 200px;
  margin-top: 30px;
  float: right;
}
</style>

