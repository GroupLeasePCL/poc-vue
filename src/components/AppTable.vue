<template>
    <div>
<el-table
                :data="tableData"
                border
                style="width: 100%"
                class="table">
            <el-table-column
                    fixed
                    prop="id"
                    label="Applicant ID"
                    width="150">
            </el-table-column>
            <el-table-column
                    fixed
                    prop="firstName"
                    label="First Name"
                    width="150">
            </el-table-column>
            <el-table-column
                    fixed
                    prop="lastName"
                    label="Last Name"
                    width="150">
            </el-table-column>
            <el-table-column
                    fixed
                    prop="email"
                    label="Email Address"
                    width="150">
            </el-table-column>
            <el-table-column
                    fixed
                    prop="address"
                    label="Address"
                    width="300">
            </el-table-column>
          </el-table>
    </div>
</template>

<script>
// import Bus from '../eventBus'
// import DbModal from './DbModal.vue'

export default {
  data () {
    return {
      tableData: [{
        'id': '1234',
        'firstName': 'Test 123',
        'lastName': 'abc',
        'email': 'bbbb@mail.com',
        'address': '123 bbb hhsh'
      },
      {
        'id': '1235',
        'firstName': 'Test 123',
        'lastName': 'abc',
        'email': 'bbbb@mail.com',
        'address': '123 bbb hhsh'
      }],
      apiUrl:
        'http://172.255.152.115:8081/employment-applications?page=1&pageSize=10',
      total: 0,
      pageSize: 10,
      currentPage: 1,
      dialogFormVisible: false,
      form: ''
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
