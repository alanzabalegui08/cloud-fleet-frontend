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
                                        <input type="text" class="form-control" id="" v-model="driver.name" placeholder="">
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Apellido</label>
                                        <input type="text" class="form-control" id="" v-model="driver.lastname" placeholder="">
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Clave</label>
                                        <input type="text" class="form-control" id="" v-model="driver.clave" placeholder="">
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
                                <input type="password" class="form-control" id="" v-model="driver.phone" placeholder="">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputPassword">Celular</label>
                                <input type="password" class="form-control" id="" v-model="driver.cellphone" placeholder="">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputPassword">Celular de red</label>
                                <input type="password" class="form-control" id="" v-model="driver.cellphone_network" placeholder="">
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
                            <input type="text" class="form-control" id="" v-model="driver.rfc" placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-3">
                            <label for="inputtext">Num. Licencia Estatal </label>
                            <input type="text" class="form-control" id="" v-model="driver.rfc" placeholder="">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputtext">Vingencia Licencia Estatal </label>
                            <input type="text" class="form-control" id="" v-model="driver.rfc" placeholder="">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputtext">Num. Licencia Federal </label>
                            <input type="text" class="form-control" id="" v-model="driver.rfc" placeholder="">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputtext">Vigencia Licencia Federal </label>
                            <input type="text" class="form-control" id="" v-model="driver.rfc" placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="inputtext">Contraseña XR a Bordo</label>
                            <input type="password" class="form-control" id="" v-model="driver.password_xr" placeholder="">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputtext">Tipo de sangre</label>
                            <input type="text" class="form-control" id="" v-model="driver.rfc" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputtext">Region</label>
                            <input type="text" class="form-control" id="" v-model="driver.rfc" placeholder="">
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
//import { mapActions } from 'vuex';
export default {
  name : 'form-driver',
  components : {
  },
  data () {
    return {
        driver : {
            name : '',
            lastname: '',
            clave : '',
            addresses : '',
            phone : '',
            cellphone :'',
            cellphone_network : '',
            rfc : '',
            num_seguro_social : '',
            num_licencia_estatal : '',
            vigencia_licencia_estatal : '',
            num_licencia_federal : '',
            vigencia_licencia_federal : '',
            tipo_sangre : '',
            password_xr : '',
            region : '',
            active : true,
        },
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