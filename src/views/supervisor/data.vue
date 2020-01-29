<template>
    <div class="row m-0">
        <div class="col">
            <h2>Supervisor</h2>
        </div>
        <div class="col text-right align-self-center">
            <router-link to="/supervisor/nuevo" class="btn cur-p btn-outline-primary ">Nuevo</router-link>
        </div>
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-0 bd">
                <div class="mT-0">
                    <div class="row">
                        <div class="col-md-12">
                            <table-klay :list="clients" :columns="dataHeder" @onDeleteItem="onDeleteItem" ></table-klay>
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
import TableKlay from '@/components/Table';
import DataHeader from '@/util/tablehead.js';
import { alerts } from '@/util/alerts';
export default {
    name : 'data',
    mixins : [ alerts ],
    components : {

        TableKlay,
    },
    data () {
        return {
            dataHeder : [],
        }
    },
    created (){
        this.dataHeder = DataHeader.supervisor;
    },
    computed : {
        ...mapGetters({
            clients: 'supervisor/getSupervisors'
        })
    },
    methods : {
        ...mapActions({
            'remove' : 'supervisor/removeSupervisor',
        }),

        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        },

        onDeleteItem(item) {
            this.deleteResource('Supervisor').then(
                (result) => {
                    if(result){
                        this.remove(item);
                    }
                }
            );
        }
    }
}
</script>