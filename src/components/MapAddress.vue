

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
export default {
    name: "map-address",
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
        <div class="col-md-12">
            <h3>Dirección</h3>
        </div>
        <div class="form-group col-md-12">
            <input type="text" class="form-control" name="fulladdress" v-model="fulladdress">
            <span style="color:red;"></span>
        </div>
        <div class="form-group col-md-12">
            <button class="btn btn-primary" type="button" @click="checkAddress">Verificar</button>
        </div>
    </div>
</template>