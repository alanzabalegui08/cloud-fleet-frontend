<template>
  <div class="row m-10">
    <div class="row mr-5">
      <div class="col-md-12">
        <h2 class="">PV XR</h2>
      </div>
    </div>
    <div class="form-group col-md-1">
      <button type="button" class="btn cur-p btn-outline-primary mr-3"><i class="fa fa-refresh"
          aria-hidden="true"></i></button>
    </div>
    <div class="form-group col-md-2 text-center">
      <date-picker class="select-form " v-model="date" language="es" :config="options"></date-picker>
    </div>
    <div class="form-group col-md-2">
      <select class="form-control select-form" id="">
        <option>Turno</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <select class="form-control select-form" id="">
        <option>Región</option>
      </select>
    </div>
  </div>
</template>

<script>

import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

export default {
  name : 'bar-programming',  
  components : {
    datePicker
  },
  data () {
    return {
        date: new Date(),
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
          locale : 'es-es',
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
