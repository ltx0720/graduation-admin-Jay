<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  // created() {

  //   alert("create: " +  this.$store.authorization.state.token)
  //   // console.log( this.$store.authorization.state)
  //   if (localStorage.getItem("state")) {
  //     this.$store.replaceState(
  //       Object.assign(
  //         {},
  //         this.$store.authorization.state,
  //         JSON.parse(localStorage.getItem("state"))
  //       )
  //     );
  //   }

  //   //   页面刷新时将state数据存储到sessionStorage中

  //   window.addEventListener("beforeunload", () => {
  //     localStorage.setItem("state", JSON.stringify(  this.$store.authorization.state));
  //   });
  // }
};
</script>
