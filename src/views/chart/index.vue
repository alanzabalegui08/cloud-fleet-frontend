<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row ">
                        <div class="col-md-12 pl-15 pl-md-2">
                            <h2 class="">Rutas por cliente</h2>
                        </div>
                    </div>
                    <div class="row p-15 ">
                        <div class="layer w-100 ">
                        <div class="w-100">                           
                            <div class="row gap-20 bd bgc-white ">
                                <div class="form-group col-md-4 col-lg-3 mb-0">
                                    <select class="form-control "  >
                                        <option>Seleccione un cliente</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4 col-lg-3 d-md-flex pb-sm-0 mb-0">
                                    <h4 class="title-form-klay mR-15">Fecha: </h4>
                                    <date-picker class="" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-4 col-lg-3 d-md-flex pb-sm-0 mb-0">
                                    <h4 class="title-form-klay mR-15">Turno: </h4>
                                    <select class="form-control " id="">
                                        <option>Turno 1</option>
                                        <option>Turno 2</option>
                                        <option>Turno 3</option>
                                    </select>
                                </div>
                                <div class="col" style="height:700px;">
                                    <GChart
                                        type="BarChart"
                                        :data="chartData"
                                        :options="chartOptions"
                                        style="height: 700px;"
                                    />                                  
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
                ['Mecanica motor', 3792000,'#ff5722'],
                ['Mecanica Taller ruza', 2695000,'#9c27b0'],
                ['Negligencia - Dormido', 2099000,'#1e88e5'],
                ['Negligencia - No programado', 2926000,'#e91e63'],
                ['Negligencia - any', 1526000,'#009688'],
                ['Negligencia - No programado', 1626000,'#304ffe'],
            ],
            chartOptions : {
                chart : {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',                    
                },
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