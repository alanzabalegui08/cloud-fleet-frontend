<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row gap-20 masonry pos-r">
                        <div class="   w-100">
                            <div class="row gap-20 bd bgc-white ">
                                <div class="form-group col-md-12">
                                    <h4>Resumen de la Programación</h4>
                                </div>
                                <div class="col-md-3 m-20">
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Desde</label>
                                            <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Hasta</label>
                                            <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Cliente</label>
                                            <select class="form-control select-form" id="" >
                                                <option>Seleccionar cliente</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Ruta</label>
                                            <select class="form-control select-form" id="" >
                                                <option>Seleccionar ruta</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Sentido</label>
                                            <select class="form-control select-form" id="" >
                                                <option>Entrada</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Unidad</label>
                                            <select class="form-control select-form" id="" >
                                                <option>------</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputName">Operador</label>
                                            <select class="form-control select-form" id="" >
                                                <option>------</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <button type="button" class="btn cur-p btn-outline-primary mr-3 select-form" >Generar reporte</button>
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
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
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

<style scoped>
.select-form {
  border-radius: 5em;
}
</style>
 