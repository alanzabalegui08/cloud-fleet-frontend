<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row bd bgc-white p-20 mb-3">
                        <div class="layer w-100 ">
                        <div class="w-100">
                            <div class="row gap-20 bd bgc-white ">
                                <div class="col-md-12">
                                    <h2 class="">Rutas por cliente</h2>
                                </div>
                            </div>                            
                            <div class="row gap-20 bd bgc-white ">
                                <div class="form-group col-md-2">
                                    <select class="form-control select-form"  >
                                        <option>Seleccione un cliente</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-1">
                                    <h4>Fecha : </h4>
                                </div>
                                <div class="form-group col-md-2 text-center">
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-1">
                                    <h4>Turno : </h4>
                                </div>
                                <div class="form-group col-md-2 text-center">
                                    <select class="form-control select-form" id="">
                                        <option>Turno 1</option>
                                        <option>Turno 2</option>
                                        <option>Turno 3</option>
                                    </select>                                    
                                </div>
                                <div class="col-md-12" style="height:700px;">
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