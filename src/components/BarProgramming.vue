<template>
  <div class="row mB-0 mL-0 mT-5 mR-0">
      <div class="form-group col-md-2 text-center">
        <date-picker class=" " v-model="date" language="es" :config="options"></date-picker>
      </div>
      <div class="form-group col-md-2">
        <select class="form-control " >
          <option>Turno</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <select class="form-control " >
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
