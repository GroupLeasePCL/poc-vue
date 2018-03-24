<template>
    <div>
        <h4> Working Experience </h4>
        <!-- First Row -->
        <b-row>
            <b-col>
                <b-form-group id='companyNameInputGroup' label='Company Name' label-for='companyNameInputGroup'>
                    <b-form-input id='companyNameInput' v-model='companyName' placeholder='Google'/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id='startDateInputGroup' label='Start Date' label-for='startDateInputGroup'>
                    <b-form-input id='startDateInput' v-model='startDate' placeholder='2016-01-01'/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id='endDateInputGroup' label='End Date' label-for='endDateInputGroup'>
                    <b-form-input id='endDateInput' v-model='endDate' placeholder='2018-01-01'/>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Second Row -->
        <b-row>
            <b-col>
                <b-form-group id='roleInputGroup' label='Role' label-for='roleInputGroup'>
                    <b-form-input id='roleInput' v-model='role' placeholder='Java developer'/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id='responsibilityInputGroup' label='Responsibility' label-for='responsibilityInputGroup'>
                    <b-form-input id='responsibilityInput' v-model='responsibility' placeholder='Develop Java for Finance project'/>
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
      companyName: null,
      startDate: null,
      endDate: null,
      role: null,
      responsibility: null
    }
  }
}
</script>

<style scoped>

</style>
