<template>
    <div class="row p-0">
        <div class="col">
            <h2 class="title-klay" >Rutas</h2>
        </div>
        <div class="col text-right">
            <router-link to="/rutas/nuevo" class="btn cur-p btn-outline-primary py-1 mt-2"  >Nuevo</router-link>
        </div>
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-0 bd">
                <div class="mT-0">
                    <div class="row">
                        <div class="col-md-12">
                            <table-klay :list="routes" :columns="dataHeader" @onDeleteItem="onDeleteItem"></table-klay>
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
import DataHeader from '@/util/tablehead';
import {
    alerts
} from '@/util/alerts';

export default {
    name: 'data',
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
        this.dataHeader = DataHeader.path;
    },
    computed: {
        ...mapGetters({
            routes: 'path/getPaths'
        })
    },
    methods: {
        ...mapActions({
            'remove': 'path/removePath',
        }),

        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        },

        onDeleteItem(item) {
            this.deleteResource('ruta').then(
                (result) => {
                    if (result) {
                        this.remove(item)
                    }
                }
            );
        }
    }
}
</script>