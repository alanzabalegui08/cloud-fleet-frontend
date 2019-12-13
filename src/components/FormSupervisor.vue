<template>
    <div class="row">
        <div class="masonry-item col-md-12">
            <div class="bgc-white p-20 bd" >
                <div class="mT-10">
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label for="inputName">Nombre</label>
                                    <input type="text" class="form-control" id="" v-model="driver.name" placeholder="">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputName">Tipo de Usuario</label>
                                    <input type="text" class="form-control" id="" v-model="driver.lastname" placeholder="">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputName">Cliente</label>
                                    <input type="text" class="form-control" id="" v-model="driver.clave" placeholder="">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputName">Telefono</label>
                                    <input type="text" class="form-control" id="" v-model="driver.clave" placeholder="">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputName">Usuario APP</label>
                                    <input type="text" class="form-control" id="" v-model="driver.clave" placeholder="">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputName">Contraseña</label>
                                    <input type="text" class="form-control" id="" v-model="driver.clave" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name : 'form-supervisor',
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