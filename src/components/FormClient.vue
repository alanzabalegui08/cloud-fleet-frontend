<template>
    <div class="row">
        <div class="col-md-12">
            <span  class="title-form-klay" style="color:#2196f3;">/ Clientes / Nuevo cliente </span>
        </div>
        <div class="col-md-6">
            <div class="mT-10">
                <fieldset>
                    <legend class=""><span class="title-form-klay">Información general</span></legend>
                    <div class="row">
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
                            <swatches v-model="client.primarycolor" colors="text-advanced" popover-to="left"></swatches>
                        </div>
                        <div class="form-group col-md-3">
                            <strong>Color de fondo:</strong>
                            <swatches v-model="client.backgroundcolor" colors="text-advanced" popover-to="left">
                            </swatches>
                        </div>
                    </div>
                </fieldset>
                <turno :list="client.turn" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="mT-10">
                <fieldset>
                    <legend class=""><span class="title-form-klay">Dirección</span></legend>
                    <MapAddress></MapAddress>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script>
import turno from './Turno';
//import GoogleMap from './GoogleMap';
import MapAddress from './MapAddress';
import { mapActions } from 'vuex';
import Swatches from 'vue-swatches';

export default {
  name : 'form-client',
  components : {
      turno,
      //GoogleMap,
      Swatches,
      MapAddress,
  },
  data () {
    return {
        client : {
            name : '',
            password: '',
            primarycolor : '#1CA085',
            backgroundcolor : '#FF0000',
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