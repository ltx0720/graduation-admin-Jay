<template>
  <div class="components-container">
    <aside>消息通知</aside>
    <div style="margin-top: 15px; ">
      <el-timeline>
        <el-timeline-item v-for="(news, index) in newsList" :key="index" placement="top">
          <el-card style="width: 500px"  @click.native="show(news.id)">
            <h3>{{news.title}}</h3>
            <p style="float: right">{{news.author}} 提交与 {{news.create_time}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <el-dialog title="消息" :visible.sync="dialogVisible" width="30%">
      <div class="editor-content" v-html="content" />
    </el-dialog>
  </div>
</template>


<script>
import CountTo from "vue-count-to";
import { getNews } from "@/api/student";
import { getMenuList, getNewsData } from "@/api/common";
import Layout from "@/layout";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default {
  name: "studentHome",
  data() {
    return {
      dialogVisible: false,
      content: "",
      newsList: []
    };
  },
  methods: {
    getNews: function() {
      return new Promise((resolve, reject) => {
        getNews().then(response => {
          this.newsList = response.data;
          console.log(response.data);
          resolve();
        });
      });
    },

    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },

    show(id) {
      var a = this.getContent(id).then(res => {
        this.content = res;
        this.dialogVisible = true;
      });
    },

    getContent(id) {
      return new Promise((resolve, reject) => {
        getNewsData(id).then(response => {
          //
          resolve(response.data);
        });
      });
    }
  },

  mounted: function() {
    this.getNews();
  }
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
    }

    .icon-approve {
      color: #40c9c6;
    }

    .icon-publish {
      color: #36a3f7;
    }

    .icon-file {
      color: #f4516c;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-right: 20%;
      margin-top: 40px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
