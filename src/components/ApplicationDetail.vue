<template>
  <div>
    <b-modal ref="detailModal" v-model="showModal" title="Applicant Detail" hide-footer>
        <b-form @submit="onSave">
            <b-row>
                <b-col lg="6" sm="12">
                    <b-form-group label="First Name:" label-for="firstName">
                        <b-form-input v-model="application.firstName" id="firstName"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Last Name:" label-for="lastName">
                        <b-form-input v-model="application.lastName" id="lastName"></b-form-input>
                     </b-form-group>
                </b-col>
          </b-row>
          <b-row>
              <b-col lg="6" sm="12">
                    <b-form-group label="Birth Date:" label-for="birthDate">
                        <b-form-input type="date" v-model="application.birthDate" id="birthDate"></b-form-input>
                    </b-form-group>
                </b-col>
          </b-row>
          <b-row>
              <b-col>
                    <b-form-group label="Address:" label-for="address">
                        <b-form-input v-model="application.address" id="address"></b-form-input>
                     </b-form-group>
                </b-col>
          </b-row>
          <b-row>
              <b-col lg="6" sm="12">
                    <b-form-group label="Email Address:" label-for="email">
                        <b-form-input type="email" v-model="application.email" id="email"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Contact Number:" label-for="contactNumber">
                        <b-form-input v-model="application.contactNumber" id="contactNumber"></b-form-input>
                     </b-form-group>
                </b-col>
          </b-row>
          <b-row>
              <b-col lg="6" sm="12">
                    <b-form-group label="Mobile Number:" label-for="mobileNumber">
                        <b-form-input v-model="application.mobileNumber" id="mobileNumber"></b-form-input>
                    </b-form-group>
                </b-col>
          </b-row>
          <b-row>
              <!-- <b-col>
                    <b-form-group label="Last Name:" label-for="lastName">
                        <b-form-input v-model="application.lastName" id="lastName"></b-form-input>
                     </b-form-group>
                </b-col> -->
          </b-row>
          <b-row>
              <!-- <b-col>
                    <b-form-group label="Last Name:" label-for="lastName">
                        <b-form-input v-model="application.lastName" id="lastName"></b-form-input>
                     </b-form-group>
                </b-col> -->
          </b-row>
          <div slot="modal-footer">
            <b-button @click="closeDialog">Cancel</b-button>
            <b-button type="submit">Save</b-button>
          </div>
        </b-form>
    </b-modal>
  </div>
</template>
<script>
import { AXIOS } from './http-common'

export default {
  data () {
    return {
      errors: []
    }
  },
  props: ['showModal', 'application'],
  methods: {
    closeDialog () {
      this.$emit('cancelmodal')
    },
    onSave (event) {
      event.preventDefault()
      console.log('saving data...')
      console.log('firstName' + this.application.firstName)
      AXIOS.put('employment-applications/' + this.application.applicationId + '/personal-info',
        { body: this.application }
      )
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
        })
      this.closeDialog()
    }
  }
}
</script>
