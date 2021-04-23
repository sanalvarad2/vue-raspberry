<template>
  <div id="app" data-server-rendered="true">
    <menu-template>
      <router-view />
    </menu-template>
  </div>
</template>
<script>
import menuTemplate from "./menu/menu";

export default {
  components: { menuTemplate },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #7a7580;
}

.container-fluid {
  padding-right: 1% !important;
  padding-left: 1% !important;
}
</style>
