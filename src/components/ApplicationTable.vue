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
      <template slot="edit-details" slot-scope="row">
        <b-button size="sm" @click="editItem(row.$index,tableData)" ></b-button>
      </template>
    </b-table>
    <b-row>
      <b-col>Total: {{total}} employees</b-col>
      <b-col lg="6">
      <b-pagination size="sm" :total-rows="total" v-model="currentPage" :per-page="pageSize"></b-pagination>
     </b-col>
    </b-row>
    <!-- <application-detail :show="dialogFormVisible" :application="application"></application-detail> -->
  </div>
</template>

<script>
import { AXIOS } from './http-common'
// import ApplicationDetail from './application-detail.vue'

export default {
  data () {
    return {
      fields: ['firstName', 'lastName', 'email', 'address', 'edit_details'],
      tableData: [],
      total: 0,
      pageSize: 10,
      currentPage: 1,
      searchText: '',
      dialogFormVisible: false,
      application: '',
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
  mounted () {
    this.search()
  },
  methods: {
    // Fetches posts when the component is created.
    getApplicationData () {
      AXIOS.get('employment-applications', this.searchParam)
        .then(response => {
          // JSON responses are automatically parsed.
          this.response = response.data
          this.tableData = response.data
          this.total = response.data.length
          this.httpStatusCode = response.status
          this.httpStatusText = response.statusText
          this.headers = response.headers
          this.fullResponse = response
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    search (event) {
      console.log('searching data...')
      let params = {page: this.currentPage - 1, pageSize: this.pageSize}

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
    editItem: function (index, rows) {
      console.log(index)
      // this.dialogFormVisible = true;
      // const appId = rows[index].applicationId;
    }
  }
}
</script>
