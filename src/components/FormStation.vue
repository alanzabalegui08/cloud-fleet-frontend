<template>
    <div class="row">
        <div class="col-md-12">
            <router-link class="title-form-klay" style="color:#2196f3;"  to="/estaciones">/ Estaciones / Nueva estación</router-link>
        </div> 
        <div class="col-md-12">
            <div class="bgc-white " >
                <div class="mT-10">
                    <div class="form-row">
                        <div class="col-md-5 pR-15">
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="inputName">Nombre</label>
                                    <ValidationProvider vid="name" name="Nombre" rules="required|alpha" v-slot="{ errors }">
                                        <input type="text" class="form-control" id="" v-model="station.name" placeholder="">
                                        <span style="color:red;">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="inputName">Dirección</label>
                                    <input type="text" class="form-control" id="" v-model="station.address" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="bgc-white " >
                                        <google-map :mapStyle="mapStyle"/>
                                    </div> 
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

import GoogleMap from './GoogleMap';
import { stationModel } from "../util/model";
import { mapActions } from 'vuex';


export default {
    name: 'form-supervisor',
    components: {
        GoogleMap
    },
    data() {
        return {
            station: stationModel(),
            mapStyle : {
                width : '100%',
                height: '450px',
            }
        }
    },
    created() {
        //this.$parent.$on('create',this.handClient)
    },
    computed: {

    },
    methods: {
        ...mapActions({
            'add' : 'station/createStation',
        }),

        handleStation() {
            this.add(this.station);
        }
    }
}
</script>