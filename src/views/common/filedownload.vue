<template>
<div class="components-container">
  <el-row>
    <el-col
      style="width: 100px"
      :span="8"
      v-for="(o, index) in imgList"
      :key="o.id" 
      :offset="index > 0 ? 2 : 0"
    >
      <el-card @click.native="test" class="card" :body-style="{ padding: '0px' }" style="width: 150px; height: 200px" shadow="hover">
        <img :src=o.url class="image" />
         <!-- <img src="@/icons/filepng/pdf.png" class="image" /> -->
        <div style="padding-left: 25px">
          <span style="magin-left: 10px">{{o.name}}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import pdf from "@/icons/filepng/pdf_4.png"
import dir from "@/icons/filepng/dir_3.png"
import zip from "@/icons/filepng/zip_4.png"
import avi from "@/icons/filepng/avi_3.png"


export default {
  data() {
    return {
      currentDate: new Date(),
      imgList: [
        {
          id: 1,
          url: dir,
          name: "开题报告"
        },
         {
           id: 2,
           url: dir,
          name: "毕设文件"
        },
         {
           id: 3,
           url: zip,
          name: "毕设文件"
        },
         {
           id: 4,
           url: avi,
          name: "毕设文件"
        },
         {
           id: 5,
           url: pdf,
          name: "毕设文件"
        },
         {
           id: 6,
           url: pdf,
          name: "毕设文件"
        }
      ]
    };
  },
  methods: {
    test: function() {
      alert("tst")
      this.router.push('test')
    }
  }
};
</script>

<style>
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
  display: block;
  margin: 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.card {
  border: 0px;
}
</style>
