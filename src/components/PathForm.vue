<template>
    <div class="row">
        <div class="masonry-item col-md-4">
            <div class="bgc-white p-20 bd" >
                <div class="mT-10">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputName">Nombre Ruta</label>
                            <ValidationProvider vid="text" name="Nombre Ruta" rules="required" v-slot="{ errors }">
                                <input type="text" class="form-control" v-model="route.name"  placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Cliente</label>
                            <ValidationProvider vid="cliente" name="Cliente" rules="required" v-slot="{ errors }">
                                <input type="text" class="form-control" v-model="route.customer"  placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Tolerancia</label>
                            <ValidationProvider vid="tolerancia" name="Tolerancia" rules="required" v-slot="{ errors }">
                                <input type="text" class="form-control" v-model="route.tolerancia"  placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Kilometraje</label>
                            <ValidationProvider vid="kilometraje" name="Kilometraje" rules="required" v-slot="{ errors }">
                                <input type="number" class="form-control"  v-model="route.kilometers" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Tipo Ruta</label>
                            <ValidationProvider vid="tiporuta" name="Tipo de ruta" rules="required" v-slot="{ errors }">
                                <input type="text" class="form-control"  v-model="route.route_type"  placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Precio Operador</label>
                            <input type="text" class="form-control" v-model="route.driver_price"  placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Precio Cliente</label>
                            <input type="text" class="form-control" v-model="route.customer_price"  placeholder="">
                        </div>                                                                                                                                                
                    </div>
                </div>
            </div>
        </div>
        <div class="masonry-item col-md-8">
            <div class="bgc-white p-20 bd" >
                <div class="mT-10">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <div class="">Activo</div>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" v-model="route.active" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Url Ruta Entrada</label>
                            <input type="text" class="form-control" v-model="route.customer"  :disabled="!route.active" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">URL Ruta Salida</label>
                            <input type="text" class="form-control" :disabled="!route.active" placeholder="">
                        </div>                                                                                                                                             
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputName">Nombre</label>
                            <input type="text" class="form-control" v-model="turn.name" >
                        </div>
                        <div class="form-group col-md-2">
                            <label>Entrada</label>
                            <select class="form-control"  v-model="turn.input" >
                                <option v-for="(time,index) in selectTime" :key="index">{{time.name}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label>Salida</label>
                            <select class="form-control" v-model="turn.output" >
                                <option v-for="(time,index) in selectTime" :key="index">{{time.name}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label>Sentido</label>
                            <select class="form-control"  v-model="turn.sentido">
                                <option v-for="(away,index) in awayOptions" :key="index">{{away.name}}</option>
                            </select>
                        </div> 
                        <div class="form-group col-md-2">
                            <label for="inputName">Codigo</label>
                            <input type="text" class="form-control"  v-model="turn.code">
                        </div>                       
                        <div class="form-group col-md-1">
                            <button type="button" class="btn cur-p btn-outline-danger mr-3 position-absolute" @click="addTrun" ><i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <table id="table_turn" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Nombre Turno</th>
                        <th>Hora inicio </th>
                        <th>Hora fin</th>
                        <th>Sentido</th>
                        <th>Codigo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(turn, index) in route.turns" :key="index">
                        <td>{{turn.name}}</td>
                       <td>{{turn.input}}</td>
                       <td>{{turn.output}}</td>
                       <td>{{turn.sentido}}</td>
                       <td>{{turn.code}}</td>
                       <td><button type="button" class="btn cur-p btn-outline-danger" @click="removeTurn(turn)" ><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>        
    </div>
</template>

<script>
import { SELECT_TURN, SELECT_TIME } from "../util/datafield";
export default {
  name : 'form-path',
  components : {

  },
  data () {
    return {
        route : {
            name : '',
            customer : '',
            tolerancia : '',
            kilometers : '',
            route_type : '',
            driver_price : '',
            customer_price : '',
            url_route_input : '',
            url_route_output : '',
            active : false,
            turns : [],
        },
        turn : {
            name  : '',
            input : '',
            output : '',
            sentido : '' ,
            code : '',
        },
        awayOptions : SELECT_TURN,
        selectTime : SELECT_TIME
    }
  },
  created (){
  },
  computed : {
      
  },
  methods : {
      addTrun () {
          this.route.turns.push({...this.turn});
      },
      removeTurn (turn) {
           const indexTurn  =  this.route.turns.findIndex(item  => item.id === turn.id);
           this.route.turns.splice(indexTurn,1);
      },
      existsgTurn () { 
          
      }
  }
}
</script>