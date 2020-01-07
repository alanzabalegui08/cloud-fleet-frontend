<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row">
                        <div class="col-3">
                            <div class="row gap-20 bd bgc-white ">
                                <div class="col-md-12">
                                    <h4 class="">Rutas por cliente</h4>
                                </div>
                                <div class="form-group col-md-12">
                                    <h4>Fecha : </h4>
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-12 ">
                                    <h4>Categoria : </h4>
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-12">
                                    <h4>Subcategoria : </h4>
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-12">
                                     <h4>Unidad : </h4>
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-12">
                                    <h4>Operador : </h4>
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-12">
                                     <h4>Turno : </h4>
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-12">
                                    <h4>Cliente : </h4>
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                            </div>   
                        </div>
                        <div class="col-9">
                            <chart width="1000" height="340"
                            id="chart1"
                            title="# rutas por cliente"
                            :labels='["Honda", "Intel", "Molex", "piza","Guardias", "Close"]'
                            :data='[100,70,125,20,40,90 ]'
                            :background-color="'rgba(153, 102, 255, 0.2)'"
                            :border-color="'rgba(153, 102, 255, 1)'"
                            ></chart> 
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
import Chart from '../../components/Chart';

export default {
    name: 'chart-ruza',
    components: {
        Sidebar,
        Navbar,
        datePicker,
        Chart,
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
    created() {

    },
    computed: {},
    methods: {
        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        }
    }
}
</script>