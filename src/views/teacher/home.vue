<template>
  <div class="components-container">
    <el-row :gutter="40" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
          <div class="card-panel-icon-wrapper icon-approve">
            <svg-icon icon-class="edit" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">查看待审批</div>
            <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('messages')">
          <div class="card-panel-icon-wrapper icon-publish">
            <svg-icon icon-class="guide" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">发布任务</div>
            <!-- <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" /> -->
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('purchases')">
          <div class="card-panel-icon-wrapper icon-file">
            <svg-icon icon-class="skill" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">查看文件</div>
            <!-- <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" /> -->
          </div>
        </div>
      </el-col>
    </el-row>

    <p>学生信息</p>
    <el-table :data="tableData" stripe style="width: 90%">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="number" label="学号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="class" label="班级"></el-table-column>
      <el-table-column prop="topic" label="课题"></el-table-column>
    </el-table>
  </div>
</template>


<script>
import CountTo from "vue-count-to";

export default {
  name: "teacherHome",
  components: {
    // PanelGroup,
  },
  data() {
    return {
      // lineChartData: lineChartData.newVisitis,
      tableData: [
        {
          id: 1,
          number: 16110572022,
          name: "的萨芬",
          class: "软件1601",
          topic: "毕设管理系统"
        }
      ]
    };
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    }
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
