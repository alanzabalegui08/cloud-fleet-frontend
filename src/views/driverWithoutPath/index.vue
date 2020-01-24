<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row gap-20 masonry pos-r">
                        <div class="col-9 barReporProgramming ">
                            <h2 class="title-klay">Operadores sin ruta</h2>
                        </div>
                        <div class="col-3 text-right pRonlyMd align-self-center  ">
                            <button type="button" class="btn cur-p btn-outline-primary" >Generar</button>
                        </div>
                        <div class="w-100">
                            <div class="row gap-20 bd bgc-white" style="height:750px">
                                <div class="col-md-12 p-0" >
                                    <div class="row m-10">
                                        <div class="form-group col-sm-4 col-lg-3 d-md-flex p-0 mb-0" >
                                             <h5 class="mr-md-3 mt-md-2" >Fecha: </h5>
                                             <div class="form-group col p-0">
                                                 <date-picker class="" name="date" v-model="date" :config="options"></date-picker>
                                             </div>
                                        </div>
                                        <div class="form-group col-sm-4 col-lg-3 d-md-flex p-0 mb-0">
                                            <h5 class="ml-md-3 mr-md-3 mt-md-2">Turno</h5>
                                            <div class="form-group col p-0">
                                                <select class="form-control " id="" >
                                                    <option>Seleccionar turno</option>
                                                </select>
                                            </div>                 
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <table-klay :list="datasource" :columns="gridHeader"></table-klay>
                                    </div>
                                </div>
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
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import TableKlay from '@/components/Table';
import DataGrid from '@/util/tablehead.js';

export default {
    name : 'comments',
    components : {
        Sidebar,
        Navbar,
        datePicker,
        TableKlay
    },
    data () {
        return {
            datasource : [],
            date: new Date(),
            options: {
                format: 'DD/MM/YYYY h:mm:ss',
                useCurrent: false,
                showClear: true,
                showClose: true,
                locale : 'es-es'
            }
        }
    },
    created (){
        this.gridHeader = DataGrid.driverWithoutpath;
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

 