<template>
    <div class="row gap-20 masonry pos-r">
        <div class="masonry-sizer col-md-10">
            <h2 >Clientes</h2>
        </div>
        <div class="masonry-sizer col-md-2">
            <router-link to="/clientes/nuevo" class="btn cur-p btn-outline-primary"  >Nuevo</router-link>
        </div>
        <div class="masonry-item colo-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-30">
                    <div class="row">
                        <div class="col-md-12">
                            <table-klay :list="clients"  @onDeleteItem="onDeleteItem" :colums="dataGrid"></table-klay>
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
import DataGrid from '../../util/datasource.js';

export default {
    name : 'data',
    components : {

        TableKlay,
    },
    data () {
        return {
            dataGrid : [],
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
        },
        onDeleteItem(item){
            console.log(item);
        }
    }
}
</script>