<template>
    <div class="row gap-20 pos-r">
        <div class="col-md-10">
            <h2 >Programación</h2>
        </div>
        <div class="  col-md-2">
            <router-link to="/regiones/nuevo" class="btn cur-p btn-outline-primary">Nuevo</router-link>
        </div>
        <div class="  colo-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-30">
                    <div class="row">
                        <div class="col-md-12">
                            <table-klay :list="clients" :colums="dataGrid"></table-klay>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import $ from 'jquery';
import TableKlay from '@/components/Table';
import DataGrid from '@/util/tablehead.js';

export default {
    name : 'data',
    components : {
        TableKlay,
    },
    data () {
        return {
        }
    },
    created (){
        this.dataGrid = DataGrid.clients
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