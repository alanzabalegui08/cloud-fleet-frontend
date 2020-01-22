<template>
    <div class="row">
        <div class="col-md-12">
            <div class="bgc-white">
                <div class="mT-10">
                    <div class="row">
                        <div class="col-sm-6 col-md-6 col-lg-4">
                            <div class="form-group col-md-12">
                                <label for="inputName">Unidad</label>
                                <ValidationProvider vid="text" name="Unidad" rules="required" v-slot="{ errors }">
                                    <select class="form-control " v-model="gas.unidad">
                                        <option>Seleccionar unidad</option>
                                    </select>
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputName">Litros</label>
                                <ValidationProvider vid="litros" name="Litros" rules="required|digits:1"
                                    v-slot="{ errors }">
                                    <input type="text" class="form-control " v-model="gas.litros">
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputName">Costo</label>
                                <ValidationProvider vid="costo" name="Costo" rules="required|digits:1"
                                    v-slot="{ errors }">
                                    <input type="text" class="form-control " v-model="gas.costo">
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputName">Fecha y Hora del ticket</label>
                                <ValidationProvider vid="date" name="Fecha y Hora del ticke" rules="required"
                                    v-slot="{ errors }">
                                    <date-picker class="" name="date" :config="options" v-model="gas.date">
                                    </date-picker>
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputName">Estación</label>
                                <ValidationProvider vid="estacion" name="Estacion" rules="required" v-slot="{ errors }">
                                    <select class="form-control " v-model="gas.estacion">
                                        <option>Entrada</option>
                                    </select>
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>
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
import { gasModel } from "../util/model";
export default {
  name : 'form-loadgas',
  components : {
      datePicker,
  },
  data () {
    return {
        datasource : [],
        options: {
            format: 'DD/MM/YYYY h:mm:ss',
            useCurrent: false,
            showClear : true,
            showClose : true,
            locale    : 'es-es',
        },
        gas : gasModel (),
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