<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row mB-20">
                        <div class="col-8 col-lg-10 pl-lg-1">
                            <h4 class="title-klay">Viajes - Resumen de la Programación</h4>
                        </div>
                        <div class="col-4 col-lg-2 text-right align-self-center pr-lg-0">
                            <button type="button" class="btn cur-p btn-outline-primary " >Generar reporte</button>
                        </div>
                    </div>
                    <div class="row gap-20 ">
                        <div class="w-100">
                            <div class="row gap-20 bd bgc-white ">
                                <div class="col-sm-5 col-lg-3 mL-10 mR-0 mT-10 mB-10  border-form-right">
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Desde</label>
                                            <date-picker v-model="date" :config="options"></date-picker>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Hasta</label>
                                            <date-picker v-model="date" :config="options"></date-picker>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Cliente</label>
                                            <select class="form-control " id="" >
                                                <option>Seleccionar cliente</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Ruta</label>
                                            <select class="form-control " id="" >
                                                <option>Seleccionar ruta</option>
                                            </select>
                                        </div>
                                    </div>                                    
                                </div>
                                <div class="col-sm-5 col-lg-3 mR-10 mT-10 mL-0 ">
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Sentido</label>
                                            <select class="form-control " id="" >
                                                <option>Entrada</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Unidad</label>
                                            <select class="form-control " id="" >
                                                <option>------</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Operador</label>
                                            <select class="form-control " id="" >
                                                <option>------</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            
                                        </div>
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


export default {
    name : 'notification',
    components : {
        Sidebar,
        Navbar,
        datePicker,
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

 