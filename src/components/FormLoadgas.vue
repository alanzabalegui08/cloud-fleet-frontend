<template>
    <div class="row">
        <div class="masonry-item col-md-12">
            <div class="bgc-white p-20 bd" >
                <div class="mT-10">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group col-md-12">
                                <label for="inputName">Unidad</label>
                                <select class="form-control select-form" id="" >
                                    <option>Seleccionar unidad</option>
                                </select>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputName">Litros</label>
                                <input type="text" class="form-control select-form" id="" >
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputName">Costo</label>
                                <input type="text" class="form-control select-form" id="" >
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputName">Fecha y Hora del ticket</label>
                                <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputName">Sentido</label>
                                <select class="form-control select-form" id="" >
                                    <option>Entrada</option>
                                </select>
                            </div>
                        </div>
                    </div>                       
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
export default {
  name : 'form-loadgas',
  components : {
      datePicker,
  },
  data () {
    return {
        datasource : [],
        date: new Date(),
        options: {
            format: 'DD/MM/YYYY h:mm:ss',
            useCurrent: false,
            showClear: true,
            showClose: true,
        }
    }
  },
  created (){
      //this.$parent.$on('create',this.handClient)
  },
  computed : {

  },
  methods : {
  }
}
</script>