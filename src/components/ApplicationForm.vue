<template>
    <div>
        <b-card no-body class='mb-1'>
            <b-card-header header-tag='header' class='p-1'>
              <b-btn block href='#' v-b-toggle.employmentApplication variant='light'>Employment Information</b-btn>
            </b-card-header>

            <b-collapse id='employmentApplication'>
                <b-card-body>
                    <b-form @submit='onSubmit' @reset='onReset'>
                        <PersonalInformationForm></PersonalInformationForm>
                        <div class='line-2'/>

                        <EducationForm></EducationForm>
                        <div class='line-2'/>

                        <WorkingExperienceForm></WorkingExperienceForm>
                        <div align='right'>
                            <b-button type='reset' variant='danger' style='width: 250px'>Cancel</b-button>
                            <b-button type='submit' variant='outline-success' style='width: 250px'>Create</b-button>
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
// import EmployeeApplicationService from '../service/EmployeeApplicationService.js'

export default {
  name: 'ApplicationForm',
  components: {
    PersonalInformationForm,
    EducationForm,
    WorkingExperienceForm
  },
  data () {
    return {
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // EmployeeApplicationService.create(application)
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
