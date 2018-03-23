<template>
  <div>
    <b-row>
      <b-col>
       <b-form-input v-model="searchText" type="text" placeholder="Search"></b-form-input>
      </b-col>
      <b-col lg="6">
      </b-col>
    </b-row>

    <b-table striped hover head-variant="dark" :items="tableData" :fields="fields" ></b-table>
    <b-row>
      <b-col>Total: {{total}} employees</b-col>
      <b-col lg="6">
      <b-pagination size="sm" :total-rows="total" v-model="currentPage" :per-page="pageSize"></b-pagination>
     </b-col>
    </b-row>
  </div>
</template>

<script>
import { AXIOS } from './http-common'

export default {
  data () {
    return {
      fields: ['applicationId', 'firstName', 'lastName', 'email', 'address'],
      tableData: [],
      total: 0,
      pageSize: 10,
      currentPage: 1,
      searchText: '',
      dialogFormVisible: false,
      form: ''
    }
  },
  mounted () {
    this.getApplicationData()
  },
  methods: {
    // Fetches posts when the component is created.
    getApplicationData () {
      AXIOS.get('employment-applications', {
        params: {
          page: this.currentPage - 1,
          pageSize: this.pageSize
        }
      })
        .then(response => {
          // JSON responses are automatically parsed.
          this.response = response.data
          console.log(response.data)
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
    }
  }
}
</script>
