<template>
  <div class="components-container">
    <div class="msgScope">
      <!-- <el-col :span="4" class="text-center">
            <router-link class="pan-btn blue-btn">
              Documentation
            </router-link>
      </el-col>-->
      <el-button v-on:click="test" class="pan-btn tiffany-btn" plain>全部消息</el-button>
      <el-button class="pan-btn tiffany-btn" size="small" plain>校级级消息</el-button>
      <el-button class="pan-btn tiffany-btn" size="small" plain>院级消息</el-button>
    </div>
    <div>
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card style="width: 500px">
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card style="width: 700px">
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <!-- <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-col :span="8" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" style="width: 500px">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">2018</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-timeline-item>-->
      </el-timeline>
    </div>
  </div>
</template>

<script>
import Layout from '@/layout'
import { testdata } from '@/router/index'

export default {
  name: "Home",
  computed: {
    // ...mapGetters(["name"])
  },

  methods: {
    test: function() {
      alert('home:'+JSON.stringify(testdata))
    }
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
