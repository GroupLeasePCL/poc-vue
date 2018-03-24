<template>
  <b-navbar toggleable="md" type="dark" fixed="top" class="bg">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      <img src="../assets/gl_logo_rgb.png" class="d-inline-block align-top" width="150px"/>
    </b-navbar-brand>
    <b-nav-text class="line-2"/>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">Manu 01</b-nav-item>
        <b-nav-item href="#">Menu 02</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      msg: 'Navigation Bar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.line-2 {
  box-sizing: border-box;
  height: 33px;
  width: 1px;
  border: 1px solid #FFFFFF;
}

.bg {
  height: 70px;
  width: 100%;
  background: linear-gradient(90deg, #8BC53F 0%, #069DD8 100%);
}

</style>
