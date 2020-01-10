

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
import GoogleMap from './GoogleMap';
export default {
    name: "map-address",
    props : {
        mapStyle : {
            type : Object
        }
    },
    components : {
        GoogleMap,
    },    
    computed: {
        ...mapGetters({
            getFullAddress: 'map/getFullAddress'
        }),

        fulladdress: {
            set(fulladdress) {
                this.addressToCoordenada(fulladdress);
            },
            get() {
                return this.getFullAddress;
            }
        }
    },
    mounted() {

    },
    methods: {
        ...mapActions({
            addressToCoordenada: 'map/addressToCoordenada'
        }),
        checkAddress() {
            console.log(this.fulladdress);
        }
    }
};
</script>

<template>
    <div class="row">
        <div class="form-group col-md-12 d-flex m-0">
            <label for="inputPassword">Puedes poner un punto en el mapa o escribir la direccion </label>
        </div>
        
        <div class="form-group col-md-12 d-flex">            
            <input type="text" class="form-control mR-20" name="fulladdress" v-model="fulladdress">
            <button class="btn btn-primary" type="button" @click="checkAddress">Verificar</button>
        </div>
        <div class="form-group col-md-12 ">
            <google-map :mapStyle="mapStyle"/>
        </div>
    </div>
</template>