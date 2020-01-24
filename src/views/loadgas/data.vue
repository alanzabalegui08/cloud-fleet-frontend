<template>
    <div class="row p-5">
        <div class="col">
            <h2 class="title-klay">Cargas de combustibles</h2>
        </div>
        <div class="col text-right align-self-center">
            <router-link to="/carga-combustible/nuevo" class="btn cur-p btn-outline-primary mT-0">Agregar</router-link>
        </div>
        <div class="col-xs-12 col-md-12">
            <table-klay :list="clients" :columns="dataHeader"></table-klay>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import $ from 'jquery';
import TableKlay from '@/components/Table';
import DataHeader from '@/util/tablehead.js';

export default {
    name : 'data',
    components : {

        TableKlay,
    },
    data () {
        return {
            dataHeader : [],
        }
    },
    created (){
        this.dataHeader = DataHeader.gasoline
    },
    computed : {
        ...mapGetters({
            clients: 'client/getClients'
        })
    },
    methods : {
        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        }
    }
}
</script>