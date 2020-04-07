<template>
  <div class="components-container">
    <aside>使用 Markdown 编辑</aside>

    <div class="editor-container">
      <!-- <el-alert
        :closable="false"
        title="You can change the language of the admin system to see the effect"
        type="success"
      />-->
      <markdown-editor ref="markdownEditor" v-model="content4" :language="language" height="600px" />
    </div>
    <div>
      <el-button type="primary" plain class="btn-publish">点击发布</el-button>
    </div>
    <el-button
      style="margin-top:10px;"
      type="primary"
      icon="el-icon-document"
      @click="getHtml"
    >Get HTML</el-button>
    <div v-html="html" />
  </div>
</template>

<script>
import MarkdownEditor from "@/components/MarkdownEditor";

const content = `
**This is test**

* vue
* element
* webpack

`;
export default {
  name: "MarkdownDemo",
  components: { MarkdownEditor },
  data() {
    return {
      content1: content,
      content2: content,
      content3: content,
      content4: content,
      html: "",
      languageTypeList: {
        en: "en_US",
        zh: "zh_CN",
        es: "es_ES"
      }
    };
  },
  computed: {
    language() {
      return this.languageTypeList["en"];
    }
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml();
      console.log(this.html);
    }
  }
};
</script>

<style scoped>
.editor-container {
  margin-bottom: 30px;
}
.tag-title {
  margin-bottom: 5px;
}
.btn-publish {
  /* margin-top: 155px; */
  width: 200px;
  float: right;
}
</style>
