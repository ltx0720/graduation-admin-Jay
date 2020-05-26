<template>
  <div class="components-container">
    <aside>请上传压缩后的文件</aside>

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
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
import { getToken, writeRecord } from "@/api/file-server/upload";
import store from '@/store/index'

export default {
  data() {
    return {
      qiniuData: {
        key: "",
        token: getToken().then(res => {
          this.qiniuData.token = res;
        })
        // filename
      }
    };
  },

  methods: {
    beforeUpload(file) {
      var usre_id = store.getters.token.id
      console.log(store.getters.token)
      this.qiniuData.key = usre_id + file.name
    },

    // uploadRequest(request) {
    //   console.log(request.file);
    //   alert("123")
    //   var putExtra = {
    //     fname: "",
    //     params: {},
    //     mimeType: [] || null
    //   };

    //   var config = {
    //     useCdnDomain: true,
    //     region: null
    //   };

    //   var qiniu = require("qiniu-js");
    //   qiniu.upload(
    //     request.file,
    //     this.qiniuData.key,
    //     this.qiniuData.token,
    //     {},
    //     config
    //   );
    // },

    uploadSuccess(response, file, fileList) {
      this.record(response.key);
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

    record(key) {
      return new Promise((resolve, reject) => {
        writeRecord(key).then(response => {
          console.log("write success");
          resolve();
        });
      });
    },

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

