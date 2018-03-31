<template>
  <div>
    <b-modal ref="detailModal" v-model="showModal" title="Applicant Detail" hide-footer>
        <b-tabs>
            <b-tab title="Personal Information" active>
                <b-form>
                    <PersonalInformationForm v-model="personalInformationData"></PersonalInformationForm>
                    <div slot="modal-footer">
                        <b-button @click="closeDialog">Cancel</b-button>
                        <b-button type="submit">Save</b-button>
                    </div>
                </b-form>
            </b-tab>
            <b-tab title="Education">
                <b-form>
                    <EducationForm v-model="educationData"></EducationForm>
                    <div slot="modal-footer">
                        <b-button @click="closeDialog">Cancel</b-button>
                        <b-button type="submit">Save</b-button>
                    </div>
                </b-form>
            </b-tab>
            <b-tab title="Working Experience">
                <b-form>
                    <WorkingExperienceForm v-model="workingExperienceData"></WorkingExperienceForm>
                    <div slot="modal-footer">
                        <b-button @click="closeDialog">Cancel</b-button>
                        <b-button type="submit">Save</b-button>
                    </div>
                </b-form>
            </b-tab>
        </b-tabs>
    </b-modal>
  </div>
</template>

<script>
import PersonalInformationForm from './application/PersonalInformationForm'
import EducationForm from './application/EducationForm'
import WorkingExperienceForm from './application/WorkingExperienceForm'
import EmployeeApplicationService from '../service/EmployeeApplicationService'
export default {
  data () {
    return {
      personalInformationData: {},
      educationData: {},
      workingExperienceData: {},
      errors: []
    }
  },
  components: {
    PersonalInformationForm,
    EducationForm,
    WorkingExperienceForm
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
      EmployeeApplicationService.updatePersonalInformation(this.application.applicationId, this.application)
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
        })
      this.closeDialog()
    }
  }
}
</script>
