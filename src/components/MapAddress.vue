

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
import GoogleMap from './GoogleMap';
export default {
    name: "map-address",
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
        <div class="form-group col-md-10">
            <label for="inputPassword">Puedes poner un punto en el mapa o escribir la direccion </label>
            <input type="text" class="form-control" name="fulladdress" v-model="fulladdress">
            <span style="color:red;"></span>
        </div>
        <div class="form-group col-md-2 text-right mButtonTop">
            <button class="btn btn-primary" type="button" @click="checkAddress">Verificar</button>
        </div>
        <div class="form-group col-md-12 ">
            <google-map style=""/>
        </div>
    </div>
</template>