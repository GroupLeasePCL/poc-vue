<template>
  <div id="app">
    <NavigationBar/>
    <ApplicationForm/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import ApplicationForm from './components/ApplicationForm'

export default {
  name: 'App',
  components: {
    NavigationBar,
    ApplicationForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
