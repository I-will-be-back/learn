<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
}

.vue-toast{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  border: 1px solid green;
  color: green;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
}
.vue-toast.toast-top{
  top: 20px;
}
.vue-toast.toast-center{
  top: 50%;
  transform: translateY(-50%);
}
.vue-toast.toast-bottom{
  bottom: 20px;
}

</style>
