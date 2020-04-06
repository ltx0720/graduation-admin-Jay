# 毕设前端

> 基于 vue-admin-template 进行二次开发，项目架构分为授权服务器、业务处理服务器、文件服务器。<br>
> 该前端工程会分别向这三个服务器发送请求。

## 功能

### 公共模块
- 登录
- 侧边栏、顶部栏等布局

### 学生模块
- 选择导师
- 选择课题
- 提交开题报告
- 提交毕设项目
- 预约答辩
- 下载文件

### 导师模块
- 审核学生提交
- 发布课题
- 发布通知

### 管理院模块 
- 审核导师提交
- 发布通知

## Build Setup

```bash
# 克隆项目
git clone https://github.com/ltx0720/graduation-project-admind-Jay.git

# 进入项目目录
cd graduation-project-admind-Jay

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```
