<template>
  <div class="components-container">
    <div class="msgScope">
      <el-button v-on:click="test" class="pan-btn tiffany-btn" plain>全部消息</el-button>
      <el-button class="pan-btn tiffany-btn" size="small" plain>校级级消息</el-button>
      <el-button class="pan-btn tiffany-btn" size="small" plain>院级消息</el-button>
    </div>
    <div>
      <el-timeline>
        <el-timeline-item
          v-for="(news, index) in newsList"
          :key="index"
          placement="top"
        >
            <el-card style="width: 500px">
              <h4>{{news.title}}</h4>
              <p>{{news.author}} 提交于 {{news.create}}</p>
            </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import Layout from "@/layout";
import { testdata } from "@/router/index";
import { getNews } from "@/api/student";
import store from "@/store";

export default {
  name: "Home",
  computed: {
    // ...mapGetters(["name"])
  },
  data() {
    return {
      newsList: []
    };
  },
  methods: {
    // 获取消息通知
    getNews: function() {
      return new Promise((resolve, reject) => {
        getNews()
          .then(response => {
            this.newsList = response.data;
            resolve();
          })
          .catch(error => {
            reject(error);
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
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.msgScope {
  margin-left: 45px;
  color: red;
  margin-bottom: 20px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 200px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.component-item {
  min-height: 100px;
}
</style>
