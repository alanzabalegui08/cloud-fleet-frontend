<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row">
                        <div class="col-7">
                            <h2 class="title-klay">Programación </h2>
                        </div>
                        <div class="col-5 text-right pb-2 py-sm-2 pr-0">
                            <div class="btn cur-p mr-3 my-1">
                                Sin unidades
                                <input class="form-check-input m-5" type="checkbox" /> 
                            </div>
                            <button type="button" class="btn cur-p btn-outline-primary mr-3 "
                                title="Actualizar programación">
                                <i class="fa fa-refresh" aria-hidden="true"></i>
                            </button>
                            <button type="button" class="btn cur-p btn-outline-primary mr-3 "
                                title="Reordenar programación">
                                <i class="fa fa-random" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div class="bgc-white bd">
                        <div class="mT-0">
                            <bar-search />
                            <div class="col-md-12">
                                <table-klay :list="datasource" :colums="gridHeader"></table-klay>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>

import $ from 'jquery';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import TableKlay from '@/components/Table';
import DataGrid from '@/util/datasource.js';
import BarSearch from '@/components/BarSearch';

export default {
    name : 'banner',
    components : {
        Sidebar,
        Navbar,
        BarSearch,
        TableKlay
    },
    data () {
        return {
            datasource : [],
        }
    },
    created (){
        this.gridHeader = DataGrid.programming
    },
    computed : {
    },
    methods : {
        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        }
    }
}
</script>