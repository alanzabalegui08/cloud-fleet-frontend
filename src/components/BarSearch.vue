<template>
    <div class="row m-10" >
        <div class="form-group col-md-3">
          <select class="form-control select-form" id="" >
            <option>Honda</option>
            <option>Cloe</option>
            <option>DANSA</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <select class="form-control select-form" id="" >
            <option>Honda</option>
            <option>Cloe</option>
            <option>DANSA</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <select class="form-control select-form" id="" >
            <option>AMBOS</option>
            <option>ENTRADA</option>
            <option>SALIDA</option>
          </select>
        </div>
        <div class="form-group col-md-1">
          Sin unidades
          <input class="form-check-input m-5" type="checkbox"  />
        </div>
        <div class="form-group col-md-2 text-center">
          <button type="button" class="btn cur-p btn-outline-primary mr-3" ><i class="fa fa-refresh" aria-hidden="true"></i></button>
          <button type="button" class="btn cur-p btn-outline-primary mr-3" ><i class="fa fa-random" aria-hidden="true"></i></button>
        </div>
        <div class="form-group col-md-2 text-center">
           <date-picker class="select-form " v-model="date" language="es" :config="options"></date-picker>
        </div>
    </div>
</template>

<script>

import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

export default {
  name : 'bar-search',  
  components : {
    datePicker
  },
  data () {
    return {
        date: new Date(),
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,          
        }      
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
 