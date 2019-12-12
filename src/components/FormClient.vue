<template>
    <div class="row">
        <div class="masonry-item col-md-6">
            <div class="bgc-white p-20 bd" style="height:300px">
                <div class="mT-10">
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputName">Nombre</label>
                                <input type="text" class="form-control" id="name_client" v-model="client.name" placeholder="Nombre completo">
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputPassword">Contraseña</label>
                                <input type="password" class="form-control" id="password_client" v-model="client.password" placeholder="Contraseña">
                            </div>
                            <div class="form-group col-md-6">
                                <label>Color texto</label>
                                <select class="form-control" id="color_client" v-model="client.text_color">
                                    <option value="#FF0000">GREEN</option>
                                    <option value="#FF00AA">YELLOW</option>
                                    <option value="#FF00BB">BLUE</option>
                                    <option value="#FF00CC">ORANGE</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label>Color Fondo</label>
                                <select class="form-control" id="color_down" v-model="client.backgroud_color">
                                    <option value="#FF0023">GREEN</option>
                                    <option value="#FF0044">YELLOW</option>
                                    <option value="#FF0088">BLUE</option>
                                    <option value="#FF0011">ORANGE</option>
                                </select>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="masonry-item col-md-6">
            <div class="bgc-white p-20 bd" style="height:300px">
                <turno :list="client.turn" />
            </div>
        </div>
        <div class="col-md-12">
            <div class="bgc-white p-20 bd" style="height:450px">
                <google-map/>
            </div>            
        </div>
    </div>
</template>

<script>
import Turno from './Turno';
import GoogleMap from './GoogleMap';
import { mapActions } from 'vuex';
export default {
  name : 'form-client',
  components : {
      Turno,
      GoogleMap
  },
  data () {
    return {
        client : {
            name : '',
            password: '',
            text_color : '',
            backgroud_color : '',
        },
    }
  },
  created (){
      this.$parent.$on('create',this.handClient)
  },
  computed : {

  },
  methods : {
      ...mapActions({
          add : 'client/createClient'
      }),
      handClient(){
          this.add(this.client);
      },
  }
}
</script>