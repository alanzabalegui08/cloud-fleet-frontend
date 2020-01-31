<template>
    <div class="row">
        <div class="col-md-12">
            <router-link class="title-form-klay" style="color:#2196f3;"  to="/clientes">/ Clientes / Nuevo cliente</router-link>
        </div>
        <div class="col-md-6">
            <div class="mT-10">
                <fieldset>
                    <legend class=""><span class="title-form-klay">Información general</span></legend>
                    <div class="row">
                        <div class="form-group col-md-12 pr-lg-0">
                            <label for="inputName">Nombre</label>
                            <ValidationProvider vid="text" name="Nombre" rules="required" v-slot="{ errors }">
                                <input type="text" class="form-control" name="Nombre" v-model="client.name">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12 pr-lg-0">
                            <label for="inputPassword">Contraseña</label>
                            <ValidationProvider vid="password" name="Contraseña" rules="required" v-slot="{ errors }">
                                <input type="password" class="form-control" v-model="client.password">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-3 d-flex">
                            <strong>Color de texto:</strong>
                            <verte class="ml-3" picker="square" v-model="client.primarycolor"></verte>
                        </div>
                        <div class="form-group col-md-3 d-flex">
                            <strong>Color de fondo:</strong>
                            <verte class="ml-3" v-model="client.backgroundcolor"></verte>
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
                    <MapAddress :mapStyle="mapStyle"></MapAddress>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import turno from './turno';
import Verte from 'verte';
import 'verte/dist/verte.css';
import MapAddress from './MapAddress';

export default {
    name: 'form-client',
    components: {
        turno,
        Verte,
        MapAddress,
    },
    data() {
        return {
            client: {
                name: '',
                password: '',
                primarycolor: '#1CA085',
                backgroundcolor: '#FF0000',
            },
            mapStyle: {
                width: '100%',
                height: '550px',
            },
            colors: ''
        }
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {
        ...mapActions({
            add: 'client/createClient',
            cleanTurn : 'turn/clean'
        }),
        handClient() {
            this.add(this.client);
            this.cleanTurn();
        },
    },
    watch : {
        client : (newClient, oldClient) =>{
            console.log(newClient,oldClient);
        }
    }
}
</script>