<template>
    <div>
        <h4> Education </h4>
        <!-- First Row -->
        <b-row>
            <b-col>
                <b-form-group id="degreeInputGroup" label="Degree" label-for="degreeInputGroup">
                    <b-form-input id="degreeInput" v-bind:value="value.degree" v-on:input="updateDegree" placeholder="Master"/>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group id="universityInputGroup" label="University" label-for="universityInputGroup">
                    <b-form-input id="lastNameInput" v-bind:value="value.university" v-on:input="updateUniversity" placeholder="Chulalongkorn"/>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Second Row -->
        <b-row>
            <b-col>
                <b-form-group id="majorInputGroup" label="Major" label-for="majorInputGroup">
                    <b-form-input id="majorInput" v-bind:value="value.major" v-on:input="updateMajor" placeholder="Computer Science"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="gpaInputGroup" label="GPA" label-for="gpaInputGroup">
                    <b-form-input id="gpaInput" v-bind:value="value.gpa" v-on:input="updateGpa" placeholder="4.00"/>
                </b-form-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'EducationForm',
  data () {
    return {
      form: {
        degree: null,
        university: null,
        major: null,
        gpa: null
      }
    }
  },
  props: ['value'],
  methods: {
    updateDegree (value) {
      this.form.degree = value
      this.$emit('input', this.form)
    },
    updateUniversity (value) {
      this.form.university = value
      this.$emit('input', this.form)
    },
    updateMajor (value) {
      this.form.major = value
      this.$emit('input', this.form)
    },
    updateGpa (value) {
      this.form.gpa = value
      this.$emit('input', this.form)
    }
  }
}
</script>

<style scoped>
</style>
