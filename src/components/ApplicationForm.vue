<template>
    <div role='tablist'>
        <b-card no-body class='mb-1'>
            <b-card-header header-tag='header' class='p-1' role='tab'>
                <b-btn block href='#' v-b-toggle.accordion1 variant='light'>Employee Information</b-btn>
            </b-card-header>

            <b-collapse id='accordion1' visible accordion='my-accordion' role='tabpanel'>
                <b-card-body>
                    <b-form @submit='onSubmit' @reset='onReset' v-if='show'>
                        <PersonalInformationForm></PersonalInformationForm>
                        <div class='line-2'/>

                        <EducationForm></EducationForm>
                        <div class='line-2'/>

                        <WorkingExperienceForm></WorkingExperienceForm>
                        <div align='right'>
                            <b-button type='reset' variant='danger' style='width: 250px'> Cancel </b-button>
                            <b-button type='submit' variant='outline-success' style='width: 250px'> Create </b-button>
                        </div>
                    </b-form>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
import PersonalInformationForm from './application/PersonalInformationForm'
import EducationForm from './application/EducationForm'
import WorkingExperienceForm from './application/WorkingExperienceForm'
import EmployeeApplicationService from '../service/EmployeeApplicationService.js'

export default {
  name: 'ApplicationForm',
  components: {
    PersonalInformationForm,
    EducationForm,
    WorkingExperienceForm
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      var application = JSON.stringify(this.form)
      alert(application)
      EmployeeApplicationService.create(application)
    },
    onReset (evt) {
      evt.preventDefault()
    }
  }
}
</script>

<style scoped>
.line-2 {
  box-sizing: border-box;
  height: 0.1%;
  width: 100%;
  border: 1px solid #dedede;
}
</style>
