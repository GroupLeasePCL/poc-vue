<template>
  <div id="app">
    <NavigationBar/>
    <div class="container">
      <div class="page-title"> New Employee Registration</div>
      <ApplicationForm/>
      <ApplicationTable/>
   </div>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue'
import ApplicationForm from './ApplicationForm.vue'
import ApplicationTable from './ApplicationTable.vue'

export default {
  name: 'Main',
  components: {
    NavigationBar,
    ApplicationForm,
    ApplicationTable
  }
}
</script>

<style>
@import '../assets/styles.css'
</style>
