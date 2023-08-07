<template>
    <Ttable :data="tableData" style="width: 100%">
      <TtableCol prop="date" label="Date" width="180" />
      <TtableCol prop="name" label="Name" width="180" />
      <TtableCol prop="address" label="Address" />
    </Ttable>
  </template>
  
  <script lang="ts" setup>
  import Ttable from '../components/table/table.vue'
  import TtableCol from '../components/table/table-col.vue'
  
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  </script>
  