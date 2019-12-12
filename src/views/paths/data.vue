<template>
    <div class="row gap-20 masonry pos-r">
        <div class="masonry-sizer col-md-10">
            <h2 >Rutas</h2>
        </div>
        <div class="masonry-sizer col-md-2">
            <router-link to="/rutas/nuevo" class="btn cur-p btn-outline-primary"  >Nuevo</router-link>
        </div>
        <div class="masonry-item colo-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-30">
                    <div class="row">
                        <div class="col-md-12">
                            <table-klay :list="clients"></table-klay>
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