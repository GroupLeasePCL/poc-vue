<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="light">Employee Information</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <!-- Personal Information -->
            <h4> Personal Information </h4>
            <!-- First Row -->
            <b-row>
              <b-col>
                <b-form-group id="firstnameInputGroup"
                        label="Firstname"
                        label-for="firstnameInputGroup">
                  <b-form-input id="firstNameInput"
                                v-model="form.firstName"
                                required
                                placeholder="John">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="lastnameInputGroup"
                        label="Lastname"
                        label-for="lastnameInputGroup">
                  <b-form-input id="lastNameInput"
                                v-model="form.lastName"
                                required
                                placeholder="Snow">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="birthdateInputGroup"
                        label="Birthdate"
                        label-for="birthdateInputGroup">
                  <b-form-input id="birthdateInput"
                                v-model="form.birthDate"
                                required
                                placeholder="1988-10-27">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <!-- Second Row -->
            <b-row>
              <b-col>
                <b-form-group id="addressInputGroup"
                        label="Address"
                        label-for="addressInputGroup">
                  <b-form-input id="addressInput"
                                v-model="form.address"
                                placeholder="111 Bluff rd. Black Rock VIC 3193">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <!-- Third Row -->
            <b-row>
              <b-col>
                <b-form-group id="emailInputGroup"
                        label="Email"
                        label-for="emailInputGroup">
                  <b-form-input id="emailInput"
                                v-model="form.email"
                                required
                                placeholder="john.s@grouplease.co.th">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="contactNumberInputGroup"
                        label="Contact Number"
                        label-for="contactNumberInputGroup">
                  <b-form-input id="contactNumberInput"
                                v-model="form.contactNumber"
                                required
                                placeholder="02-8889999">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="mobileNumberInputGroup"
                        label="Mobile Number"
                        label-for="mobileNumberInputGroup">
                  <b-form-input id="mobileNumberInput"
                                v-model="form.mobileNumber"
                                placeholder="088-8885555">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <!-- Fourth Row -->
            <b-row>
              <b-col>
                <b-form-group id="appliedPositionGroup"
                        label="Applied Position"
                        label-for="appliedPositionGroup">
                  <b-form-input id="appliedPositionInput"
                                v-model="form.appliedPosition"
                                required
                                placeholder="Java developer">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="expectedSalaryInputGroup"
                        label="Expected Salary (THB)"
                        label-for="expectedSalaryInputGroup">
                  <b-form-input id="expectedSalaryInput"
                                v-model="form.expectedSalary"
                                placeholder="25000">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="referenceInputGroup"
                        label="Reference"
                        label-for="referenceInputGroup">
                  <b-form-input id="referenceInput"
                                v-model="form.reference"
                                placeholder="088-7777777">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="line-2"/>
            <!-- Education -->
            <h4> Education </h4>
            <!-- First Row -->
            <b-row>
              <b-col>
                <b-form-group id="degreeInputGroup"
                        label="Degree"
                        label-for="degreeInputGroup">
                  <b-form-input id="degreeInput"
                                v-model="form.degree"
                                placeholder="Master">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="universityInputGroup"
                        label="University"
                        label-for="universityInputGroup">
                  <b-form-input id="lastNameInput"
                                v-model="form.university"
                                placeholder="Chulalongkorn">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <!-- Second Row -->
            <b-row>
              <b-col>
                <b-form-group id="majorInputGroup"
                        label="Major"
                        label-for="majorInputGroup">
                  <b-form-input id="majorInput"
                                v-model="form.major"
                                placeholder="Computer Science">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="gpaInputGroup"
                        label="GPA"
                        label-for="gpaInputGroup">
                  <b-form-input id="gpaInput"
                                v-model="form.gpa"
                                placeholder="4.00">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="line-2"/>
            <!-- Working Experience -->
            <h4> Working Experience </h4>
            <!-- First Row -->
            <b-row>
              <b-col>
                <b-form-group id="companyNameInputGroup"
                        label="Company Name"
                        label-for="companyNameInputGroup">
                  <b-form-input id="companyNameInput"
                                v-model="form.companyName"
                                placeholder="Google">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="startDateInputGroup"
                        label="Start Date"
                        label-for="startDateInputGroup">
                  <b-form-input id="startDateInput"
                                v-model="form.startDate"
                                placeholder="2016-01-01">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="endDateInputGroup"
                        label="End Date"
                        label-for="endDateInputGroup">
                  <b-form-input id="endDateInput"
                                v-model="form.endDate"
                                placeholder="2018-01-01">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <!-- Second Row -->
            <b-row>
              <b-col>
                <b-form-group id="roleInputGroup"
                        label="Role"
                        label-for="roleInputGroup">
                  <b-form-input id="roleInput"
                                v-model="form.role"
                                placeholder="Java developer">
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="responsibilityInputGroup"
                        label="Responsibility"
                        label-for="responsibilityInputGroup">
                  <b-form-input id="responsibilityInput"
                                v-model="form.responsibility"
                                placeholder="Develop Java for Finance project">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <div align="right">
              <b-button type="reset" variant="danger" style="width: 250px"> Cancel </b-button>
              <b-button type="submit" variant="outline-success" style="width: 250px"> Create </b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import EmployeeApplicationService from '../service/EmployeeApplicationService.js'

export default {
  name: 'ApplicationForm',
  data () {
    return {
      form: {
        firstName: null,
        lastName: null,
        birthDate: null,
        address: null,
        email: null,
        contactNumber: null,
        mobileNumber: null,
        appliedPosition: null,
        expectedSalary: null,
        reference: null,
        degree: null,
        university: null,
        major: null,
        gpa: null,
        companyName: null,
        startDate: null,
        endDate: null,
        role: null,
        responsibility: null
      },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line-2 {
  box-sizing: border-box;
  height: 0.1%;
  width: 100%;
  border: 1px solid #DEDEDE;
}
</style>
