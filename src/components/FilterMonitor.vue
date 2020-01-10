
<template>
    <div class="bgc-white bd" >
        <div class="mT-5">
            <div class="row">
                <div class="col-md-12">
                </div>
                <div class="col-md-12">
                    <h5 class="pT-10 pL-15">Filtro</h5>
                    <div class="form-group col-md-12">
                        <select type="text" class="form-control" >
                            <option>UNIDAD</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-12">
                    <div class="form-group col-md-12">
                        <select type="text" class="form-control" >
                            <option>CLIENTE</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <h4>Rutas</h4>
                <table id="dataTable" class=" table-paths table-striped table-bordered" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td class="text-center">
                                <input class="" type="checkbox" v-model="driver.active" />
                            </td>
                            <td >Adm Oblatos</td>
                        </tr>
                        <tr>
                            <td class="text-center">
                                <input class="" type="checkbox" v-model="driver.active" />
                            </td>
                            <td >Adm Oblatos</td>
                        </tr>
                        <tr>
                            <td class="text-center">
                                <input class="" type="checkbox" v-model="driver.active" />
                            </td>
                            <td >Adm Oblatos</td>
                        </tr>
                        <tr>
                            <td class="text-center">
                                <input class="" type="checkbox" v-model="driver.active" />
                            </td>
                            <td >Adm Oblatos</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row mT-30">
                <div class="col-10">
                    <div class="form-group col-md-12">
                        Mostrar ruta salida 
                    </div>
                </div>
                <div class="col-2">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c mB-15">
                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer">
                        <label for="inputCall1" class="peers peer-greed js-sb ai-c">
                            <span class="peer peer-greed"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <div class="form-group col-md-12">
                        Mostrar paradas 
                    </div>
                </div>
                <div class="col-2">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c mB-15">
                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer">
                        <label for="inputCall1" class="peers peer-greed js-sb ai-c">
                            <span class="peer peer-greed"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <div class="form-group col-md-12">
                        Mostrar horas 
                    </div>
                </div>
                <div class="col-2">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c mB-15">
                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer">
                        <label for="inputCall1" class="peers peer-greed js-sb ai-c">
                            <span class="peer peer-greed"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <div class="form-group col-md-12">
                        Mostrar unidades disponibles 
                    </div>
                </div>
                <div class="col-2">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c mB-15">
                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer">
                        <label for="inputCall1" class="peers peer-greed js-sb ai-c">
                            <span class="peer peer-greed"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <div class="form-group col-md-12">
                        Mostrar trafico 
                    </div>
                </div>
                <div class="col-2">
                    <div class="checkbox checkbox-circle checkbox-info peers ai-c mB-15">
                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer">
                        <label for="inputCall1" class="peers peer-greed js-sb ai-c">
                            <span class="peer peer-greed"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import { mapActions } from 'vuex';
export default {
  name : 'filter-monitor',
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
<style>
.table-paths {
     width: 100%;
}
</style>