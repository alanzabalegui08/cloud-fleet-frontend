<template>
        <div class="mT-30">
            <!-- <form> -->
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <label for="inputName">Nombre</label>
                        <input type="text" class="form-control" id="name_client" v-model="turno.name">
                    </div>
                    <div class="form-group col-md-3">
                        <label>Entrada</label>
                        <select class="form-control" id="color_client" v-model="turno.input">
                            <option value="12:00">12:00 AM</option>
                            <option value="1:00">01:00 AM</option>
                            <option value="2:00">02:00 AM</option>
                            <option value="3:00">03:00 AM</option>
                            <option value="4:00">04:00 AM</option>
                            <option value="5:00">05:00 AM</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label>Salida</label>
                        <select class="form-control" id="color_down" v-model="turno.output">
                            <option value="12:00">12:00 AM</option>
                            <option value="1:00">01:00 AM</option>
                            <option value="2:00">02:00 AM</option>
                            <option value="3:00">03:00 AM</option>
                            <option value="4:00">04:00 AM</option>
                            <option value="5:00">05:00 AM</option>
                        </select>
                    </div>
                    <div class="form-group col-md-1">
                        
                        <button type="button" class="btn cur-p btn-outline-danger mr-3 position-absolute"  @click="handleTurn()"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                </div>
            <!-- </form> -->
            <table id="table_turn" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Nombre Turno</th>
                        <th>Entrada</th>
                        <th>Salida</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(turno,index) in list" :key="index">
                        <td>{{turno.name}}</td>
                       <td>{{turno.input}}</td>
                       <td>{{turno.output}}</td>
                       <td><button type="button" class="btn cur-p btn-outline-danger mr-3 position-absolute"  @click="removeTurn()"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                    </tr>
                </tbody>
            </table>            
        </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name : 'turno',
  props : {
      turn : {
          type : Object
      }      
  },
  data () {
    return {
        turno : {
            name : '',
            output: '',
            input : '',
        },
    }
  },
  created (){

  },
  computed : {
      ...mapGetters({
          list : 'turn/getTurns'
      })
  },
  methods : {
      ...mapActions({
          add : 'turn/addTurn',
          remove : 'turn/removeTurn',
      }),

      handleTurn (){
        this.add(this.turno);
      },
      removeTurn(turn){
          this.remove(turn)
      }
  }
}
</script>