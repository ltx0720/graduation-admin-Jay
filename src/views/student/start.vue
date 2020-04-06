<template>
  <div class="sForm">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="170px"
      class="demo-ruleForm"
      :label-position="ruleForm.labelPosition"
    >
      <el-form-item label="课题名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="课题目的意义" prop="desc" required>
        <el-input type="textarea" :autosize="{ minRows: 8, maxRows: 45}" 
            v-model="ruleForm.desc">
        </el-input>
      </el-form-item>

      <el-form-item label="可行性分析和预期目标" prop="desc">
        <el-input type="textarea" :autosize="{ minRows: 8, maxRows: 45}"
            v-model="ruleForm.desc">
        </el-input>
      </el-form-item>

      <div class="tag">
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >{{tag}}</el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        ></el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加标签</el-button>
      </div>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dynamicTags: [],
      inputVisible: false,
      inputValue: "",
      ruleForm: {
        labelPosition: "left",
        name: "",
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [{ required: true, message: "请输入课题名称", trigger: "blur" }],
        desc: [{ required: true, message: "不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>

<style>
.sForm {
  margin-top: 40px;
  margin-left: 40px;
}

.tag {
  width: 80%;
  margin-left: 170px;
  margin-bottom: 30px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>