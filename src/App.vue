<template>
  <div id="app">
   <div class="page-title"> New Employee Registration</div>
   <div id="container">
    <AppTable/>
   </div>
  </div>
</template>

<script>
import AppTable from './components/AppTable.vue'

export default {
  name: 'App',
  components: {
    AppTable
  }
}
</script>

<style>
@import './assets/styles.css'
</style>
