<template>
  <div>
    <div id="app">
      <!-- action="http://localhost:8082/test/upoload" -->
      <form method="post"  enctype="multipart/form-data">
        <input type="file" name="file" />
        <br /> 
      <!--  -->
        <input type="submit"  v-on:click="upload" value="提交" />
      </form>
    </div>
  </div>
</template>


<script>
import { fileupload } from "@/api/test";

export default {
  data() {
    return {
      msg: "----\n...."
    };
  },
  methods : {
    upload: function() {
      return new Promise((resolve, reject) => {
        fileupload()
          .then(response => {
            // this.tableData = response.data;
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
</script>

<style>
</style>
