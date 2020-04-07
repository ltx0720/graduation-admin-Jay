<template>
  <div class="components-container">
    <aside>
      使用富文本编辑器编辑任务
      <!-- <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html">Documentation</a> -->
    </aside>
    <div>
      <tinymce v-model="content" :height="470" />
    </div>
  <div>
     <el-button type="primary" plain class="btn-publish">点击发布</el-button>
  </div>
    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      content:
      `<h1 style="text-align: center;">标题!</h1><p style="text-align: center; font-size: 15px;">
      <ul>
        <li>One </li>
        <li>Two</li>
        <li>Three</li>
      </ul>`
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 90px;
}

.btn-publish {
  width: 200px;
  margin-top: 30px;
  float: right;
}
</style>

