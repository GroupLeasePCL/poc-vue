<template>
    <div>
<b-table striped hover head-variant="dark" :items="tableData" :fields="fields" class="rectangle-3"></b-table>
    </div>
</template>

<script>
// import Bus from '../eventBus'
// import DbModal from './DbModal.vue'

// import axios from 'axios'
import {AXIOS} from './http-common'

export default {
  data () {
    return {
      fields: ['applicationId', 'firstName', 'lastName', 'email', 'address'],
      tableData: [],
      total: 0,
      pageSize: 10,
      currentPage: 0,
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
          page: this.currentPage,
          pageSize: this.pageSize
        }
      })
        .then(response => {
          // JSON responses are automatically parsed.
          this.response = response.data
          console.log(response.data)
          this.tableData = response.data
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
