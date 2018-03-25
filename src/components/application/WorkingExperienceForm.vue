<template>
    <div>
        <h4> Working Experience </h4>
        <!-- First Row -->
        <b-row>
            <b-col>
                <b-form-group id='companyNameInputGroup' label='Company Name' label-for='companyNameInputGroup'>
                    <b-form-input id='companyNameInput' v-bind:value="value.companyName" v-on:input="updateCompanyName" placeholder='Google'/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id='startDateInputGroup' label='Start Date' label-for='startDateInputGroup'>
                    <b-form-input id='startDateInput' v-bind:value="value.startDate" v-on:input="updateStartDate" placeholder='2016-01-01'/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id='endDateInputGroup' label='End Date' label-for='endDateInputGroup'>
                    <b-form-input id='endDateInput' v-bind:value="value.endDate" v-on:input="updateEndDate" placeholder='2018-01-01'/>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Second Row -->
        <b-row>
            <b-col>
                <b-form-group id='roleInputGroup' label='Role' label-for='roleInputGroup'>
                    <b-form-input id='roleInput' v-bind:value="value.role" v-on:input="updateRole" placeholder='Java developer'/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id='responsibilityInputGroup' label='Responsibility' label-for='responsibilityInputGroup'>
                    <b-form-input id='responsibilityInput' v-bind:value="value.responsibility" v-on:input="updateResponsibility" placeholder='Develop Java for Finance project'/>
                </b-form-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'WorkingExperienceForm',
  data () {
    return {
      form: {
        companyName: null,
        startDate: null,
        endDate: null,
        role: null,
        responsibility: null
      }
    }
  },
  props: ['value'],
  methods: {
    updateCompanyName (value) {
      this.form.companyName = value
      this.$emit('input', this.form)
    },
    updateStartDate (value) {
      this.form.startDate = value
      this.$emit('input', this.form)
    },
    updateEndDate (value) {
      this.form.endDate = value
      this.$emit('input', this.form)
    },
    updateRole (value) {
      this.form.role = value
      this.$emit('input', this.form)
    },
    updateResponsibility (value) {
      this.form.responsibility = value
      this.$emit('input', this.form)
    }
  }
}
</script>

<style scoped>
</style>
