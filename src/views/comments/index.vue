<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row gap-20 masonry pos-r">
                        <div class="masonry-item  w-100">
                            <div class="row gap-20 bd bgc-white ">
                                <div class="col-md-12">
                                    <h2 class="">Comentarios</h2>
                                </div>
                            </div>  
                            <div class="row gap-20 bd bgc-white" style="height:750px">
                                <div class="col-md-12">
                                    <div class="row m-10">
                                        <div class="form-group col-xs-1">
                                            <h5>Periodo del: </h5>
                                        </div>
                                        <div class="form-group col-md-2 text-center">
                                            <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                        </div>
                                        <div class="form-group col-xs-1 text-center">
                                            <h5>al </h5>
                                        </div>
                                        <div class="form-group col-md-2 text-center">
                                            <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                        </div>
                                        <div class="form-group col-xs-1 text-center">
                                            <h5>Categoría </h5>
                                        </div>
                                        <div class="form-group col-md-2 text-center">
                                            <select class="form-control select-form" id="" >
                                                <option>Seleccionar categoría</option>
                                            </select>                                    
                                        </div>
                                        <div class="form-group col-xs-1 text-center">
                                            <h5>Sub Categoría </h5>
                                        </div>
                                        <div class="form-group col-md-2 text-center">
                                            <select class="form-control select-form" id="" >
                                                <option>Seleccionar sub categoría</option>
                                            </select>                                    
                                        </div>
                                    </div>
                                    <div class="row m-10">
                                        <div class="form-group col-xs-1">
                                            <h5>Unidad: </h5>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <select class="form-control select-form" id="" >
                                                <option>Seleccionar unidad</option>
                                            </select>                                                
                                        </div>
                                        <div class="form-group col-xs-1 text-center">
                                            <h5>Operador </h5>
                                        </div>
                                        <div class="form-group col-md-2 text-center">
                                            <select class="form-control select-form" id="" >
                                                <option>Seleccionar operador</option>
                                            </select>    
                                        </div>
                                        <div class="form-group col-xs-1 text-center">
                                            <h5>Turno </h5>
                                        </div>
                                        <div class="form-group col-md-2 text-center">
                                            <select class="form-control select-form" id="" >
                                                <option>Seleccionar Turno</option>
                                            </select>                                    
                                        </div>
                                        <div class="form-group col-xs-1 text-center">
                                            <h5>Cliente </h5>
                                        </div>
                                        <div class="form-group col-md-2 text-center">
                                            <select class="form-control select-form" id="" >
                                                <option>Seleccionar sub categoría</option>
                                            </select>                                    
                                        </div>
                                        <div class="form-group col-md-1 text-center">
                                             <button type="button" class="btn cur-p btn-outline-primary mr-3 select-form" >Generar</button>                                 
                                        </div>
                                    </div>
                                    <div class="row m-10">
                                        <table-klay :list="datasource" :colums="gridHeader"></table-klay>
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
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import TableKlay from '../../components/Table';
import DataGrid from '../../util/datasource.js';

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
        this.gridHeader = DataGrid.comments;
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

<style scoped>
.select-form {
  border-radius: 5em;
}
</style>
 