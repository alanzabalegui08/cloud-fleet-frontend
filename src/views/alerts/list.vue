
<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row p-5">
                        <div class="col">
                            <h2 class="title-klay">{{title}}</h2>
                        </div>
                        <div class="col text-right">
                            <router-link to="/alertas-combustibles" class="btn cur-p btn-outline-danger mT-0">Regresar</router-link>
                        </div>
                        <div class="col-xs-12 col-md-12">
                            <table-klay :list="data" :columns="dataHeader"></table-klay>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import $ from 'jquery';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import TableKlay from '@/components/Table';
import DataHeader from '@/util/datasource.js';

export default {
    name: 'list-alerts',
    props: {
        title: {
            type: Object,
        },
        data: {
            type: Array,
        }
    },
    components: {
        TableKlay,
        Sidebar,
        Navbar,
    },
    data() {
        return {
            dataHeader: [],
        }
    },
    created() {
        this.dataHeader = DataHeader.gasAlerts
    },
    computed: {
        ...mapGetters({
            clients: 'client/getClients'
        })
    },
    methods: {
        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        }
    }
}
</script>