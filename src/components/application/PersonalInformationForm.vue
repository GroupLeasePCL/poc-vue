<template>
    <div>
        <h4> Personal Information </h4>

        <!-- First row -->
        <b-row>
            <b-col>
                <b-form-group id="firstnameInputGroup" label="Firstname" label-for="firstnameInputGroup">
                    <b-form-input id="firstNameInput" v-bind:value="value.firstName" v-on:input="updateFirstName" required placeholder="John"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="lastnameInputGroup" label="Lastname" label-for="lastnameInputGroup">
                    <b-form-input id="lastNameInput" v-bind:value="value.lastName" v-on:input="updateLastName" required placeholder="Snow"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="birthdateInputGroup" label="Birthdate" label-for="birthdateInputGroup">
                    <b-form-input id="birthdateInput" v-bind:value="value.birthDate" v-on:input="updateBirthDate" required placeholder="1988-10-27"/>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Second Row -->
        <b-row>
            <b-col>
                <b-form-group id="addressInputGroup" label="Address" label-for="addressInputGroup">
                    <b-form-input id="addressInput" v-bind:value="value.address" v-on:input="updateAddress" placeholder="111 Bluff rd. Black Rock VIC 3193"/>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Third Row -->
        <b-row>
            <b-col>
                <b-form-group id="emailInputGroup" label="Email" label-for="emailInputGroup">
                    <b-form-input id="emailInput" v-bind:value="value.email" v-on:input="updateEmail" required placeholder="john.s@grouplease.co.th"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="contactNumberInputGroup" label="Contact Number" label-for="contactNumberInputGroup">
                    <b-form-input id="contactNumberInput" v-bind:value="value.contactNumber" v-on:input="updateContactNumber" required placeholder="02-8889999"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="mobileNumberInputGroup" label="Mobile Number" label-for="mobileNumberInputGroup">
                    <b-form-input id="mobileNumberInput" v-bind:value="value.mobileNumber" v-on:input="updateMobileNumber" placeholder="088-8885555"/>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Fourth Row -->
        <b-row>
            <b-col>
                <b-form-group id="appliedPositionGroup" label="Applied Position" label-for="appliedPositionGroup">
                    <b-form-input id="appliedPositionInput" v-bind:value="value.appliedPosition" v-on:input="updateAppliedPosition" required placeholder="Java developer"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="expectedSalaryInputGroup" label="Expected Salary (THB)" label-for="expectedSalaryInputGroup">
                    <b-form-input id="expectedSalaryInput" v-bind:value="value.expectedSalary" v-on:input="updateExpectedSalary" placeholder="25000"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="referenceInputGroup" label="Reference" label-for="referenceInputGroup">
                    <b-form-input id="referenceInput" v-bind:value="value.reference" v-on:input="updateReference" placeholder="088-7777777"/>
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
        reference: null
      }
    }
  },
  props: ['value'],
  methods: {
    updateFirstName (value) {
      this.form.firstName = value
      this.$emit('input', this.form)
    },
    updateLastName (value) {
      this.form.lastName = value
      this.$emit('input', this.form)
    },
    updateBirthDate (value) {
      this.form.birthDate = value
      this.$emit('input', this.form)
    },
    updateAddress (value) {
      this.form.address = value
      this.$emit('input', this.form)
    },
    updateEmail (value) {
      this.form.email = value
      this.$emit('input', this.form)
    },
    updateContactNumber (value) {
      this.form.contactNumber = value
      this.$emit('input', this.form)
    },
    updateMobileNumber (value) {
      this.form.mobileNumber = value
      this.$emit('input', this.form)
    },
    updateAppliedPosition (value) {
      this.form.appliedPosition = value
      this.$emit('input', this.form)
    },
    updateExpectedSalary (value) {
      this.form.expectedSalary = value
      this.$emit('input', this.form)
    },
    updateReference (value) {
      this.form.reference = value
      this.$emit('input', this.form)
    }
  }
}
</script>

<style scoped>
</style>
