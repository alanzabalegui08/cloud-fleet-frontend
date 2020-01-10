<template>
    <div class="row p-0">
        <div class="col">
            <h2 class="title-klay" >Operadores</h2>
        </div>
        <div class="col text-right">
            <router-link to="/operadores/nuevo" class="btn cur-p btn-outline-primary"  >Nuevo</router-link>
        </div>
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-0 bd">
                <div class="mT-0">
                    <div class="row">
                        <div class="col-md-12">
                            <table-klay :list="drivers" :columns="dataHeader" @onDeleteItem="onDeleteItem"></table-klay>
                        </div>
                    </div>
                </div>
            </div>                            
        </div>
    </div>    
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
import $ from 'jquery';
import TableKlay from '@/components/Table';
import DataHeader from '@/util/datasource.js';
import {
    alerts
} from '@/util/alerts';

export default {
    name: 'operadores-data',
    mixins: [alerts],
    components: {
        TableKlay,
    },
    data() {
        return {
            dataHeader: [],
        }
    },
    created() {
        this.dataHeader = DataHeader.driver
    },
    computed: {
        ...mapGetters({
            drivers: 'driver/getDrivers'
        })
    },
    methods: {
        ...mapActions({
            'remove': 'driver/removeDriver'
        }),

        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        },

        onDeleteItem(item) {
            this.deleteResource('operador').then(
                (result) => {
                    if (result) {
                        this.remove(item);
                    }
                }
            );
        }
    }
}
</script>