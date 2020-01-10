<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row gap-20 masonry pos-r">
                        <div class="col-7">
                            <h2 class="">Programación</h2>
                        </div>
                        <div class="col-5 text-right">
                            <button type="button" class="btn cur-p btn-outline-primary mr-3 " >Generar</button>
                        </div>
                        <div class="w-100">
                            <div class="row gap-20 bd bgc-white ">
                            </div>  
                            <div class="row gap-20 bd bgc-white" style="height:750px">
                                <div class="col-md-12 p-0">
                                    <div class="row m-10">
                                        <div class="form-group col-md-2 d-md-flex p-0">
                                             <h5 class="mR-10">Periodo del: </h5>
                                            <date-picker class="col" name="date" v-model="date" :config="options"></date-picker>
                                        </div>
                                        <div class="form-group col-md-2 d-md-flex p-0">
                                            <h5 class="mL-10 mR-10">al</h5>
                                            <date-picker class="col" name="date" v-model="date" :config="options"></date-picker>
                                        </div>
                                        <div class="form-group col-md-2 d-md-flex  p-0">
                                            <h5  class="mL-10 mR-10" >Cliente </h5>
                                            <select class="form-control col" id="" >
                                                <option>Seleccionar cliente</option>
                                            </select>                                    
                                        </div>
                                        <div class="form-group col-md-2 d-md-flex  p-0">
                                            <h5  class="mL-10 mR-10" >Turno</h5>
                                            <select class="form-control col" id="" >
                                                <option>Seleccionar turno</option>
                                            </select>                                    
                                        </div>
                                        <div class="form-group col-md-2 d-md-flex  p-0">
                                            <h5  class="mL-10 mR-10" >Unidad: </h5>
                                            <select class="form-control col" id="" >
                                                <option>Seleccionar unidad</option>
                                            </select>                                                
                                        </div>
                                        <div class="form-group col-md-2 d-md-flex  p-0">
                                            <h5  class="mL-10 mR-10" >Operador </h5>
                                            <select class="form-control col" id="" >
                                                <option>Seleccionar operador</option>
                                            </select>    
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
import DataGrid from '@/util/datasource.js';

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
                locale : 'es-es',
            }
        }
    },
    created (){
        this.gridHeader = DataGrid.programminReport;
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



 