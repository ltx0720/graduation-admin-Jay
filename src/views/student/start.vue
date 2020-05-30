<template>
  <div class="components-container">
    <aside>开题报告上传——请上传压缩后的文件</aside>

    <el-upload
      class="avatar-uploader"
      drag
      action="http://upload.qiniup.com/"
      :data="qiniuData"
      :on-success="uploadSuccess"
      :before-upload="beforeUpload"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text" id="upload">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip"></div>
    </el-upload>
  </div>
</template>

<script>
import { getToken, writeRecord } from "@/api/file-server/upload";
import store from "@/store/index";

export default {
  data() {
    return {
      qiniuData: {
        key: "",
        token: ""
      }
    };
  },

  methods: {
    getToken() {
      getToken().then(res => {
        this.qiniuData.token = res;
      });
    },

    beforeUpload(file) {
      console.log(store.getters.token);
      this.qiniuData.key = file.name;
    },

    uploadSuccess(response, file, fileList) {
      this.record(response.key, 1);
      this.$message({
        message: "上传成功",
        type: "success"
      });
    },

    uploadError(err, file, fileList) {
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },

    record(key, type_id) {
      return new Promise((resolve, reject) => {
        writeRecord(key, type_id).then(response => {
          console.log("write success");
          resolve();
        });
      });
    }
  },

  mounted: function() {
    this.getToken();
  }
};
</script>

<style scoped>
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.avatar-uploader {
  margin-left: 30%;
}
</style>

