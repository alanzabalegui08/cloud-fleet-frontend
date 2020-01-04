<template>
    <div class="row">
        <div class="masonry-item col-md-6">
            <div class="bgc-white p-20 bd" style="">
                <div class="mT-10">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputName">Nombre</label>
                            <ValidationProvider vid="text" name="Nombre" rules="required" v-slot="{ errors }">
                                <input type="text" class="form-control" name="Nombre" v-model="client.name">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputPassword">Contraseña</label>
                            <ValidationProvider vid="password" name="Contraseña" rules="required" v-slot="{ errors }">
                                <input type="password" class="form-control" v-model="client.password">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-3">
                            <strong>Color de texto:</strong>
                            <swatches v-model="client.text_color" colors="text-advanced" popover-to="left"></swatches>
                        </div>
                        <div class="form-group col-md-3">
                            <strong>Color de fondo:</strong>
                            <swatches v-model="client.backgroud_color" colors="text-advanced" popover-to="left">
                            </swatches>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="masonry-item col-md-6">
            <turno :list="client.turn" />
        </div>
        <div class="col-md-12">
            <div class="row" style="height: 800px;">
                <div class="bgc-white p-20 bd col-md-6" style="height:450px">
                    <google-map />
                </div>
                <div class="col-md-6 bgc-white p-20">
                    <MapAddress></MapAddress>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Turno from './Turno';
import GoogleMap from './GoogleMap';
import MapAddress from './MapAddress';
import { mapActions } from 'vuex';
import Swatches from 'vue-swatches';

export default {
  name : 'form-client',
  components : {
      Turno,
      GoogleMap,
      Swatches,
      MapAddress,
  },
  data () {
    return {
        client : {
            name : '',
            password: '',
            primarycolor : '#1CA085',
            backgroundcolor : '#1CA085',
        },
    }
  },
  created () { },
  mounted () { },
  computed : { },
  methods : {
      ...mapActions({
          add : 'client/createClient'
      }),
      handClient () {
          this.add(this.client);
      },
  }
}
</script>