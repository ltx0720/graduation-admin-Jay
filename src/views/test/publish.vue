<template>
  <div class="components-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="富文本编辑" name="richtext"></el-tab-pane>
      <el-tab-pane label="MarkDown编辑" name="markdown"></el-tab-pane>
    </el-tabs>

    <component :is='currentView'></component>
  </div>
</template>


<script>
import m from "@/views/common/editor/markdown";
import r from "@/views/common/editor/richtext";

export default {
  data() {
    return {
      currentView: 'richtext',
      activeName: "first"
    };
  },
  components: {
    markdown: m,
    richtext: r
  },
  methods: {
    handleClick(tab, event) {
         console.log(tab, event);
        if(tab.name == 'richtext'){
            this.currentView = 'richtext';
        }else{
        	 this.currentView = 'markdown';
        }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
