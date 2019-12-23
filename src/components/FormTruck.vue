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
                                        <label for="inputName">Num. Unidad</label>
                                        <ValidationProvider vid="num_unidad" name="Num. de unidad" rules="required|alpha_num" v-slot="{ errors }">
                                            <input type="text" class="form-control" v-model="truck.numUnidad" placeholder="">
                                            <span style="color:red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Operador</label>                                        
                                        <input type="text" class="form-control" id="" v-model="truck.driver" placeholder="">
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Tipo</label>
                                        <select class="form-control" v-model="truck.type">
                                            <option v-for="(unidad,index) in selectUnidadType" :key="index" :value="unidad.id">{{unidad.name}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                    <div class="form-group col-md-12">
                        <label for="inputPassword">Comentario</label>
                        <input type="text" class="form-control" id="" v-model="truck.comment" placeholder="">
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="form-group col-md-4">
                                <label for="inputPassword">Modelo</label>
                                <ValidationProvider vid="model" name="Modelo" rules="required|alpha_num" v-slot="{ errors }">
                                    <input type="text" class="form-control" id="" v-model="truck.model" placeholder="">
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputPassword">Marca</label>
                                <ValidationProvider vid="marca" name="Marca" rules="required|alpha_num" v-slot="{ errors }">
                                    <input type="text" class="form-control" id="" v-model="truck.marca" placeholder="">
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputPassword">Sub-Marca</label>
                                <input type="text" class="form-control" id="" v-model="truck.subMarca" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </div>
        <div class="masonry-item col-md-6">
            <div class="bgc-white p-20 bd" >
                <div class="mT-10">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Placas</label>
                            <input type="text" class="form-control" id="" v-model="truck.placas" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Tipo de Placas</label>
                            <input type="text" class="form-control" id="" v-model="truck.tipoPlacas" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Combustible </label> 
                            <ValidationProvider vid="combustible" name="Combustible" rules="required" v-slot="{ errors }">
                                <select class="form-control"  v-model="truck.combustible">
                                    <option v-for="(combustible, index) in selectCombustible" :key="index" :value="combustible.id"> {{combustible.name}} </option>
                                </select>
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Rendimeinto</label>
                            <ValidationProvider vid="rendimiento" name="Rendimiento" rules="required" v-slot="{ errors }">
                                <input type="number" class="form-control" id="" v-model="truck.performance" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Maquina</label>
                            <ValidationProvider vid="maquina" name="Maquina" rules="required|alpha_num" v-slot="{ errors }">
                                <input type="text" class="form-control" id="" v-model="truck.machine" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">No serie</label>
                            <ValidationProvider vid="numserire" name="no serie" rules="required" v-slot="{ errors }">
                                <input type="number" class="form-control" id="" v-model="truck.noSerie" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Poliza</label>
                            <input type="text" class="form-control" id="" v-model="truck.poliza" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Vingencia de poliza</label>
                            <input type="text" class="form-control" id="" v-model="truck.vigenciaPoliza" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Tel. Aseguradora</label>
                            <input type="text" class="form-control" id="" v-model="truck.cellphoneSeguro" placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Clave Trackjack</label>
                            <input type="text" class="form-control" id="" v-model="truck.claveTrackJack" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Serie Ceiba</label>
                            <input type="text" class="form-control" id="" v-model="truck.serieCeiba" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Region</label>
                            <input type="text" class="form-control" id="" v-model="truck.region" placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <div class="">Taller</div>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" v-model="truck.taller" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-md-4">
                            <div class="">Tirada</div>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" v-model="truck.tirada" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Mantenimiento</label>
                            <input type="text" class="form-control" id="" v-model="truck.mantenimineto" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { truckModel } from "../util/model";
import { SELECT_UNIDAD,SELECT_COMBUSTIBLE } from "../util/datafield";
export default {
  name : 'form-truck',
  components : {
  },
  data () {
    return {
        truck : truckModel(),
        selectUnidadType : SELECT_UNIDAD,
        selectCombustible : SELECT_COMBUSTIBLE,
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