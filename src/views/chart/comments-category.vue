<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="row gap-20 bd bgc-white ">
                                <div class="col-md-12">
                                    <h4 class="">Comentario por categoria</h4>
                                    <spam class="">utiliza los filtros para mejores resultados</spam>
                                </div>
                                <div class="form-group col-md-12">
                                    <h4>Fecha : </h4>
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-12 ">
                                    <h4>Categoria : </h4>
                                    <select class="form-control select-form" id="">
                                         <option>Categoria</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <h4>Subcategoria : </h4>
                                    <select class="form-control select-form" id="">
                                         <option>Subcategoria</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                     <h4>Unidad : </h4>
                                    <select class="form-control select-form" id="">
                                         <option>Unidad</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <h4>Operador : </h4>
                                    <select class="form-control select-form" id="">
                                         <option>Operador</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                     <h4>Turno : </h4>
                                    <select class="form-control select-form" id="">
                                         <option>Turno</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <h4>Cliente : </h4>
                                    <select class="form-control select-form" id="">
                                        <option>Cliente</option>
                                    </select>
                                </div>
                            </div>   
                        </div>
                        <div class="col-md-10">
                            <h3>Resumen Grafica</h3>
                            <GChart
                                type="BarChart"
                                :data="chartData"
                                :options="chartOptions"
                                style="height: 700px;"
                            />
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
import { GChart } from 'vue-google-charts';

export default {
    name: 'chart-ruza',
    components: {
        Sidebar,
        Navbar,
        datePicker,
        GChart,
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
            },
            chartData: [
                ['City', '', { role: 'style' }],
                ['Factores extremos - Trafico', 8175000,'#b87333'],
                ['Mecanica motor', 3792000,'#980000'],
                ['Mecanica Taller ruza', 2695000,'#ffcc22'],
                ['Negligencia - Dormido', 2099000,'#0b5394'],
                ['Negligencia - No programado', 2926000,'#FF0000'],
                ['Negligencia - any', 1526000,'#00ffff'],
                ['Negligencia - No programado', 1626000,'#38761d'],
            ],
            chartOptions : {
                chart : {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',                    
                },
            }
        }
    },
    created() {},
    computed: {},
    methods: {
        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        }
    }
}
</script>