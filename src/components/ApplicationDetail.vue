<template>
  <div>
      <b-form v-if="show" v-model="application">
          <b-form-group label="First Name:" label-for="firstName">
            <b-form-input v-model="application.firstName" id="firstName"></b-form-input>
          </b-form-group>
          <b-button @click="closeDialog">Cancel</b-button>
          <b-button type="submit">Save</b-button>
      </b-form>
  </div>
</template>
<script>
export default {
  data() {
      return {}
  },
  props: ['show', 'application'],
  methods: {
      closeDialog () {
          this.$emit('closeDialog');
      }
  }
}
</script>

