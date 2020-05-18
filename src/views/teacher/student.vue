<template>
  <div class="components-container">
    <p>学生信息</p>
    <el-table :data="studentList" stripe style="width: 90%">
      <el-table-column type="index" label="序号"></el-table-column>
      <!-- <el-table-column prop="number" label="学号"></el-table-column> -->
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="class_name" label="班级"></el-table-column>
      <el-table-column prop="topic_title" label="课题"></el-table-column>
    </el-table>

  </div>
</template>


<script>
import CountTo from "vue-count-to";
import { getStudentList } from "@/api/teacher";

export default {
  name: "teacherHome",
  components: {
    // PanelGroup,
  },
  data() {
    return {
      studentList: [],
    };
  },
  methods: {
    getStudentList: function() {
      return new Promise((resolve, reject) => {
        getStudentList()
          .then(response => {
            this.studentList = response.data;
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    }
  },

  mounted: function() {
    this.getStudentList();
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
