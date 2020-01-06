<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row gap-20 masonry pos-r">
                        <div class="  col-md-10">
                            <h2>Clientes</h2>
                        </div>
                        <div class="  col-md-2">
                            <button type="button" class="btn cur-p btn-outline-primary"
                                @click="showModal">Nuevo</button>
                        </div>
                        <div class="  colo-xs-12 col-md-12">
                            <div class="bgc-white p-20 bd">
                                <div class="mT-30">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="bgc-white bd bdrs-3 p-20 mB-20">
                                                <h4 class="c-grey-900 mB-20">Tables</h4>
                                                <table-klay :list="clients"></table-klay>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <client-modal ref="modal"></client-modal>
    </div>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import $ from 'jquery';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import TableKlay from '../components/Table';
import ClientModal from '../components/Modal';

export default {
    name: 'home',
    components: {
        Sidebar,
        Navbar,
        TableKlay,
        ClientModal,
    },
    data() {
        return {}
    },
    created() {},
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