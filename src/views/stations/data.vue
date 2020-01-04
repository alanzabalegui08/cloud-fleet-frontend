<template>
    <div class="row gap-20 masonry pos-r p-15">
        <div class="masonry-sizer col-md-10">
            <h2 >Estaciones</h2>
        </div>
        <div class="masonry-sizer col-md-2">
            <router-link to="/estaciones/nuevo" class="btn cur-p btn-outline-primary">Nuevo</router-link>
        </div>
        <div class="masonry-item colo-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-30">
                    <div class="row">
                        <div class="col-md-12">
                            <table-klay :list="stations" :columns="dataHeader" @onDeleteItem="onDeleteItem" ></table-klay>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import $ from 'jquery';
import TableKlay from '../../components/Table';
import DataHeader from '@/util/datasource.js';
import { alerts } from '@/util/alerts';

export default {
    name : 'data',
    mixins : [ alerts ],
    components : {
        TableKlay,
    },
    data () {
        return {
            name : 'estación',
            dataHeader : [],
        }
    },
    created (){
        this.dataHeader = DataHeader.station;
    },
    computed : {
        ...mapGetters({
            stations: 'station/getStations',
        })
    },
    methods : {
        ...mapActions({
            'remove' : 'station/removeStation',
        }),

        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        },

        onDeleteItem(item) {
            this.deleteResource(this.name).then(
                (result) => {
                    if(result) {
                        this.remove(item);
                    }
                }
            );
        }
        
    }
}
</script>