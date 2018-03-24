<template>
    <div>
        <h4> Personal Information </h4>

        <!-- First row -->
        <b-row>
            <b-col>
                <b-form-group id="firstnameInputGroup" label="Firstname" label-for="firstnameInputGroup">
                    <b-form-input id="firstNameInput" v-model="firstName" required placeholder="John"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="lastnameInputGroup" label="Lastname" label-for="lastnameInputGroup">
                    <b-form-input id="lastNameInput" v-model="lastName" required placeholder="Snow"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="birthdateInputGroup" label="Birthdate" label-for="birthdateInputGroup">
                    <b-form-input id="birthdateInput" v-model="birthDate" required placeholder="1988-10-27"/>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Second Row -->
        <b-row>
            <b-col>
                <b-form-group id="addressInputGroup" label="Address" label-for="addressInputGroup">
                    <b-form-input id="addressInput" v-model="address" placeholder="111 Bluff rd. Black Rock VIC 3193"/>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Third Row -->
        <b-row>
            <b-col>
                <b-form-group id="emailInputGroup" label="Email" label-for="emailInputGroup">
                    <b-form-input id="emailInput" v-model="email" required placeholder="john.s@grouplease.co.th"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="contactNumberInputGroup" label="Contact Number" label-for="contactNumberInputGroup">
                    <b-form-input id="contactNumberInput" v-model="contactNumber" required placeholder="02-8889999"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="mobileNumberInputGroup" label="Mobile Number" label-for="mobileNumberInputGroup">
                    <b-form-input id="mobileNumberInput" v-model="mobileNumber" placeholder="088-8885555"/>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Fourth Row -->
        <b-row>
            <b-col>
                <b-form-group id="appliedPositionGroup" label="Applied Position" label-for="appliedPositionGroup">
                    <b-form-input id="appliedPositionInput" v-model="appliedPosition" required placeholder="Java developer"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="expectedSalaryInputGroup" label="Expected Salary (THB)" label-for="expectedSalaryInputGroup">
                    <b-form-input id="expectedSalaryInput" v-model="expectedSalary" placeholder="25000"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="referenceInputGroup" label="Reference" label-for="referenceInputGroup">
                    <b-form-input id="referenceInput" v-model="reference" placeholder="088-7777777"/>
                </b-form-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'PersonalInformationForm',
  data () {
    return {
      firstName: null,
      lastName: null,
      birthDate: null,
      address: null,
      email: null,
      contactNumber: null,
      mobileNumber: null,
      appliedPosition: null,
      expectedSalary: null,
      reference: null
    }
  }
}
</script>

<style scoped>

</style>
