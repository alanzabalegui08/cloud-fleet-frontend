<template>
  <div class="row">
    <div class="col">
      <div class="row mB-15 mL-0 mT-15 mR-0">
        <div class="form-group col-md-2 mTopProgramming pr-md-0">
          <select class="form-control ">
            <option>Cliente</option>
          </select>
        </div>
        <div class="form-group col-md-2 mTopProgramming pr-md-0">
          <select class="form-control ">
            <option>Turno</option>
          </select>
        </div>
        <div class="form-group col-md-4 d-none d-sm-block mTopProgramming" ></div>
        <div class="form-group col-md-2 mTopProgramming pr-md-0">
          <select class="form-control ">
            <option>Sentido</option>
          </select>
        </div>
        <div class="form-group col-md-2 mTopProgramming text-center">
          <date-picker class=" " v-model="date" language="es" :config="options"></date-picker>
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
</style>
 