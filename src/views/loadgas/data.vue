<template>
    <div class="row p-5">
        <div class="col">
            <h2 class="title-klay">Cargas de combustibles</h2>
        </div>
        <div class="col text-right">
            <router-link to="/carga-combustible/nuevo" class="btn cur-p btn-outline-primary">Agregar</router-link>
        </div>
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-10 bd">
                <div class="mT-10">
                    <div class="row">
                        <div class="col-md-12">
                            <table-klay :list="clients" :columns="dataHeader"></table-klay>
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
import TableKlay from '../../components/Table';
import DataHeader from '../../util/datasource.js';

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