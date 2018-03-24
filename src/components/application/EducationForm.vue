<template>
    <div>
        <h4> Education </h4>
        <!-- First Row -->
        <b-row>
            <b-col>
                <b-form-group id="degreeInputGroup" label="Degree" label-for="degreeInputGroup">
                    <b-form-input id="degreeInput" v-model="degree" placeholder="Master"/>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group id="universityInputGroup" label="University" label-for="universityInputGroup">
                    <b-form-input id="lastNameInput" v-model="university" placeholder="Chulalongkorn"/>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Second Row -->
        <b-row>
            <b-col>
                <b-form-group id="majorInputGroup" label="Major" label-for="majorInputGroup">
                    <b-form-input id="majorInput" v-model="major" placeholder="Computer Science"/>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group id="gpaInputGroup" label="GPA" label-for="gpaInputGroup">
                    <b-form-input id="gpaInput" v-model="gpa" placeholder="4.00"/>
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
      degree: null,
      university: null,
      major: null,
      gpa: null
    }
  }
}
</script>

<style scoped>

</style>
