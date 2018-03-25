<template>
  <div>
    <b-row>
      <b-col>
       <b-form-input v-model="searchText" type="text" placeholder="Search" @keyup.native="search"></b-form-input>
      </b-col>
      <b-col lg="6">
        <b-form-checkbox-group v-model="searchBy" :options="searchByOptions"></b-form-checkbox-group>
      </b-col>
    </b-row>

    <b-table striped hover head-variant="dark" :items="tableData" :fields="fields" >
      <template slot="detail" slot-scope="data">
        <b-button size="sm" @click="editItem(data.index,tableData)">detail</b-button>
      </template>
    </b-table>
    <application-detail :show-modal="showDetail" :application="application" v-on:cancelmodal="closeDialog"></application-detail>
  </div>
</template>

<script>
import { AXIOS } from '../service/http-common'
import ApplicationDetail from './ApplicationDetail'
import EmployeeApplicationService from '../service/EmployeeApplicationService'

export default {
  data () {
    return {
      fields: ['firstName', 'lastName', 'email', 'address', 'detail'],
      tableData: [],
      limit: 10,
      offset: 0,
      searchText: '',
      showDetail: false,
      application: {},
      errors: [],
      searchBy: [],
      searchByOptions: [
        {text: 'First Name', value: 'firstName'},
        {text: 'Last Name', value: 'lastName'},
        {text: 'Email', value: 'email'}
      ]
    }
  },
  components: {
    ApplicationDetail
  },
  mounted () {
    this.search()
  },
  watch: {
    searchBy: function () {
      this.fetchApplications()
    }
  },
  methods: {
    fetchApplications () {
      let searchParam = {}
      if (this.searchText.trim().length > 0 && this.searchBy.length > 0) {
        let selectedOption = ''
        for (var i = 0; i < this.searchBy.length; i++) {
          selectedOption = this.searchBy[i]
          if (selectedOption === 'firstName') {
            searchParam.firstName = this.searchText
          }
          if (selectedOption === 'lastName') {
            searchParam.lastName = this.searchText
          }
          if (selectedOption === 'email') {
            searchParam.email = this.searchText
          }
        }
      }

      EmployeeApplicationService.fetch(this.offset, this.limit, searchParam)
        .then(data => {
          this.tableData = data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    search (event) {
      this.fetchApplications()
    },
    editItem: function (index, tableData) {
      const appId = tableData[index].applicationId
      AXIOS.get('employment-applications/' + appId + '/personal-info')
        .then(response => {
          this.application = response.data
          this.showDetail = true
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    closeDialog: function () {
      this.showDetail = false
    }
  }
}
</script>
