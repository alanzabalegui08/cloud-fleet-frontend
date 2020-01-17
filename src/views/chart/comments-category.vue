<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row pL-0">
                        <h3 class="title-klay">Resumen Grafica</h3>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="row bgc-white p-10">
                                <div class="col-md-12">
                                    <h5 style="font-size:9px;">Comentario por categoria</h5>
                                    <spam style="font-size:9px;" >utiliza los filtros para mejores resultados</spam>
                                </div>
                                <div class="form-group col-md-12">
                                    <h5>Fecha : </h5>
                                    <date-picker class="" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-12 ">
                                    <h5>Categoria : </h5>
                                    <select class="form-control " id="">
                                         <option>Categoria</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <h5>Subcategoria : </h5>
                                    <select class="form-control " id="">
                                         <option>Subcategoria</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                     <h5>Unidad : </h5>
                                    <select class="form-control " id="">
                                         <option>Unidad</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <h5>Operador : </h5>
                                    <select class="form-control " id="">
                                         <option>Operador</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                     <h5>Turno : </h5>
                                    <select class="form-control " id="">
                                         <option>Turno</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <h5>Cliente : </h5>
                                    <select class="form-control " id="">
                                        <option>Cliente</option>
                                    </select>
                                </div>
                            </div>   
                        </div>
                        <div class="col-md-10 bgc-white">
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
                ['Factores extremos - Trafico', 8175000,'#50d890'],
                ['Mecanica motor', 3792000,'#297ca0'],
                ['Mecanica Taller ruza', 2695000,'#f0134d'],
                ['Negligencia - Dormido', 2099000,'#12cad6'],
                ['Negligencia - No programado', 2926000,'#ffcc00'],
                ['Negligencia - any', 1526000,'#00028c'],
                ['Negligencia - No programado', 1626000,'#ff5959'],
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