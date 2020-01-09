<template>
  <div class="row">
    <div class="col">
      <div class="row m-5">
        <div class="form-group col-md-2">
          <select class="form-control select-form">
            <option>Cliente</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <select class="form-control select-form">
            <option>Truno</option>
          </select>
        </div>
        <div class="form-group col-md-3"></div>
        <div class="form-group col-md-2">
          <select class="form-control select-form">
            <option>Sentido</option>
          </select>
        </div>
        <div class="form-group col-md-1">
          Sin unidades
          <input class="form-check-input m-5" type="checkbox" />
        </div>
        <div class="form-group col-md-2 text-center">
          <date-picker class="select-form " v-model="date" language="es" :config="options"></date-picker>
        </div>
      </div>
      <div class="row m-0">
        <table-klay :list="list" :columns="dataHeader"></table-klay>
      </div>
    </div>
  </div>
</template>

<script>

import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import TableKlay from '@/components/Table';
import DataGrid from '@/util/datasource.js';

export default {
  name : 'bar-search',  
  components : {
    datePicker,
    TableKlay,
  },
  data () {
    return {
        date: new Date(),
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
          locale : 'es-es',        
        },
        dataHeader : DataGrid.programming,
        list : [],
        
    }
  },
  created (){
    
  },
  computed : {
    
  },
  methods : {
  }
}
</script>


<style scoped>
.select-form {
  border-radius: 5em;
}
</style>
 