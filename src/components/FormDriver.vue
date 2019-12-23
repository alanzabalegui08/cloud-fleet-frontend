<template>
    <div class="row">
        <div class="masonry-item col-md-6">
            <div class="bgc-white p-20 bd" >
                <div class="mT-10">
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="col-md-12">
                                        <img src="https://via.placeholder.com/180x160.png"/>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Fotografia</label>
                                        <input type="file" class="form-control" id="" placeholder="">
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Nombre</label>
                                        <ValidationProvider vid="name" name="Nombre" rules="required|alpha" v-slot="{ errors }">
                                            <input type="text" class="form-control" id="" v-model="driver.name" placeholder="">
                                            <span style="color:red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Apellido</label>
                                        <ValidationProvider vid="lastname" name="Apellido" rules="required|alpha" v-slot="{ errors }">
                                            <input type="text" class="form-control" id="" v-model="driver.lastname" placeholder="">
                                            <span style="color:red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Clave</label>
                                        <ValidationProvider vid="clave" name="Clave" rules="alpha_num" v-slot="{ errors }">
                                            <input type="text" class="form-control" id="" v-model="driver.clave" placeholder="">
                                            <span style="color:red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                    <div class="form-group col-md-12">
                        <label for="inputPassword">Dirección</label>                        
                        <input type="password" class="form-control" id="" v-model="driver.addresses" placeholder="">
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="form-group col-md-4">
                                <label for="inputPassword">Teléfono</label>
                                <ValidationProvider vid="phone" name="Teléfono" rules="digits:10" v-slot="{ errors }">
                                    <input type="text" class="form-control" id="" v-model="driver.phone" placeholder="">
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputPassword">Celular</label>
                                <ValidationProvider vid="cellphone" name="Celular" rules="digits:10" v-slot="{ errors }">
                                    <input type="text" class="form-control" id="" v-model="driver.cellphone" placeholder="">
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>                                    
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputPassword">Celular de red</label>
                                <ValidationProvider vid="cellphonenewtword" name="Celular de red" rules="digits:10" v-slot="{ errors }">
                                    <input type="text" class="form-control" id="" v-model="driver.cellphone_network" placeholder="">
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="masonry-item col-md-6">
            <div class="bgc-white p-20 bd" >
                <div class="mT-10">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="inputPassword">RFC</label>
                            <input type="text" class="form-control" id="" v-model="driver.rfc" placeholder="">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputtext">Num. Seguro Social</label>
                            <input type="text" class="form-control" id="" v-model="driver.seguroSocial" placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-3">
                            <label for="inputtext">Num. Licencia Estatal </label>
                            <input type="text" class="form-control" id="" v-model="driver.noLicenciaEstatal" placeholder="">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputtext">Vingencia Licencia Estatal </label>
                            <date-picker class="form-control" name="date" v-model="driver.vigLicenciaEstatal" :config="options"></date-picker>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputtext">Num. Licencia Federal </label>
                            <input type="text" class="form-control" id="" v-model="driver.noLicenciaFederal" placeholder="">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputtext">Vigencia Licencia Federal </label>
                            <date-picker class="form-control" name="date" v-model="driver.vigLicenciaFederal" :config="options"></date-picker>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="inputtext">Contraseña XR a Bordo</label>
                            <input type="password" class="form-control" id="" v-model="driver.passwordXR" placeholder="">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputtext">Tipo de sangre</label>
                            <input type="text" class="form-control" id="" v-model="driver.typeBlood" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputtext">Region</label>
                            <input type="text" class="form-control" id="" v-model="driver.region" placeholder="">
                        </div>
                    </div>
                    <div class="form-group col-md-12">
                        <div class="">Activo</div>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="driver.active" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { driverModel } from "../util/model";
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

export default {
  name : 'form-driver',
  components : {
      datePicker,
  },
  data () {
    return {
        driver : driverModel(),
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
  },
  computed : {

  },
  methods : {
  }
}
</script>