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
import { AXIOS } from './http-common'
import ApplicationDetail from './ApplicationDetail.vue'

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
      searchParam: {},
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
  methods: {
    getApplicationData () {
      AXIOS.get('employment-applications', this.searchParam)
        .then(response => {
          this.tableData = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    search (event) {
      console.log('searching data...')
      let params = {offset: this.offset, limit: this.limit}

      if (this.searchText.trim().length > 0 && this.searchBy.length > 0) {
        console.log(this.searchText)
        let selectedOption = ''
        for (var i = 0; i < this.searchBy.length; i++) {
          selectedOption = this.searchBy[i]
          if (selectedOption === 'firstName') {
            params.firstName = this.searchText
          }
          if (selectedOption === 'lastName') {
            params.lastName = this.searchText
          }
          if (selectedOption === 'email') {
            params.email = this.searchText
          }
        }
      }

      this.searchParam = {params: params}
      this.getApplicationData()
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
