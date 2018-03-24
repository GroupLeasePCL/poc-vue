<template>
  <div id="app">
    <div class="page-title"> New Employee Registration</div>
    <div class="container">
      <NavigationBar/>
      <ApplicationForm/>
      <ApplicationTable/>
   </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import ApplicationForm from './components/ApplicationForm'
import ApplicationTable from './components/application-table.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    ApplicationForm,
    ApplicationTable
  }
}
</script>

<style>
@import './assets/styles.css'
</style>
