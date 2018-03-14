<template>
    <div>
<b-table striped hover :items="tableData" :fields="fields"></b-table>
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
      fields: ['firstName', 'lastName', 'email', 'address'],
      tableData: [],
      total: 0,
      pageSize: 10,
      currentPage: 1,
      dialogFormVisible: false,
      form: ''
    }
  },
  methods: {
    // Fetches posts when the component is created.
    callRestService () {
      AXIOS.get('employment-applications')
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

<style>
.table {
  margin-top: 30px;
}

.pagination {
  margin-top: 10px;
  float: right;
}
</style>
