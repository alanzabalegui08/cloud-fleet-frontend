<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row">
                        <div class="col-7">
                            <h2 class="title-klay mL-10">PV XR</h2>
                        </div>
                        <div class="col-5 text-right">
                            <button type="button" class="btn cur-p btn-outline-primary mr-3 mT-15">
                                <i class="fa fa-refresh" aria-hidden="true"></i>
                            </button>
                        </div>
                        </div>                    
                    <div class="bgc-white bd" >
                        <div class="mT-10">
                            <bar-programming />
                            <table-klay :list="datasource" :columns="gridHeader"></table-klay>
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
import BarProgramming from '@/components/BarProgramming'

export default {
    name : 'pvxr',
    components : {
        Sidebar,
        Navbar,
        TableKlay,
        BarProgramming
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