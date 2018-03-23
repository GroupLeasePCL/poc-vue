<template>
  <div id="app">
   <div class="page-title"> New Employee Registration</div>
   <div class="container">
    <ApplicationTable/>
   </div>
  </div>
</template>

<script>
import ApplicationTable from './components/application-table.vue'

export default {
  name: 'App',
  components: {
    ApplicationTable
  }
}
</script>

<style>
@import './assets/styles.css'
</style>
