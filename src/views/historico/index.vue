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
                                <div class="form-group col-md-2">
                                    <select class="form-control select-form" id="" >
                                        <option>Seleccione una Unidad</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-1 text-center">
                                    <h4>Desde : </h4>
                                </div>
                                <div class="form-group col-md-2 text-center">
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-1 text-center">
                                    <h4>Hasta : </h4>
                                </div>
                                <div class="form-group col-md-2 text-center">
                                    <date-picker class="select-form" name="date" v-model="date" :config="options"></date-picker>
                                </div>
                                <div class="form-group col-md-2 text-center">
                                    <button type="button" class="btn cur-p btn-outline-primary mr-3" >Actualizar</button>
                                </div>
                                <div class="col-md-12">
                                    <google-map/>
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
import GoogleMap from '../../components/GoogleMap';

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
 