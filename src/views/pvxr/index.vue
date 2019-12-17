<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="bgc-white bd" >
                        <div class="mT-10">
                            <bar-programming />
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
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import TableKlay from '../../components/Table';
import DataGrid from '../../util/datasource.js';
import BarProgramming from '../../components/BarProgramming'

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