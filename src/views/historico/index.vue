<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row">
                        <div class="col-12">
                            <h2 class="title-klay mL-10">Histórico de unidad </h2>
                        </div>
                    </div>
                    <div class="bgc-white bd">
                        <div class="mT-0">
                            <div class="row">
                                <div class="col">
                                    <div class="row mB-0 mL-0 mT-15 mR-0">
                                        <div class="form-group col-md-2 mTopProgramming">
                                            <select class="form-control">
                                                <option>Seleccione una Unidad</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-2 text-center d-flex pL-0">
                                            <h5 class="mR-10 mT-5">Desde</h5>
                                            <date-picker class="" name="date" v-model="date" :config="options">
                                            </date-picker>
                                        </div> 

                                        <div class="form-group col-md-2 text-center d-flex pL-0">
                                            <h5 class="mR-10 mT-5">Hasta:</h5>
                                            <date-picker class="" name="date" v-model="date" :config="options"></date-picker>
                                        </div>                                        
                                        <div class="form-group col-md-2">
                                            <button type="button"
                                                class="btn cur-p btn-outline-primary mr-3">Actualizar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 mB-15">
                                <google-map :mapStyle="mapStyle" />
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
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import GoogleMap from '@/components/GoogleMap';

export default {
    name : 'notification',
    components : {
        Sidebar,
        Navbar,
        datePicker,
        GoogleMap
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
            mapStyle : {
                height : '700px',
            },
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

 