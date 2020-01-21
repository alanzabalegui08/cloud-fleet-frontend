<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="layer w-100 ">
                        <h2 class="lh-1">Notificaciones</h2>
                    </div>
                    <div class="row">
                        <div class="w-100">
                            <div class="row gap-20 m-5">
                                <div class='col-sm-6 col-lg-3'>
                                    <div class="bgc-white p-10 n-color-pallete select-form" >
                                        <div class="row">
                                            <div class="col-9 layer w-100 mB-10">
                                                <h4 class="lh-1">Rutas sin</h4>
                                            </div>
                                            <div class="col-3 text-right">
                                                <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">10</span>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="layer w-100">
                                            <notification />
                                            <notification />
                                            <notification />
                                            <notification />
                                        </div>                     
                                    </div>
                                </div>
                                <div class='col-sm-6 col-lg-3'>
                                    <div class="bgc-white p-10 n-color-pallete select-form" >
                                        <div class="row">
                                            <div class="col-9 layer w-100 mB-10">
                                                <h4 class="lh-1">Operador sin</h4>
                                            </div>
                                            <div class="col-3 text-right">
                                                <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-orange-50 c-orange-500">10</span>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="layer w-100">
                                            <notification />
                                            <notification />
                                            <notification />
                                        </div>                     
                                    </div>
                                </div>
                                <div class='col-sm-6 col-lg-3'>
                                    <div class="bgc-white p-10 n-color-pallete select-form" >
                                        <div class="row">
                                            <div class="col-9 layer w-100 mB-10">
                                                <h4 class="lh-1">Ruta con Retraso de </h4>
                                            </div>
                                            <div class="col-3 text-right">
                                                <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">10</span>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="layer w-100">
                                            <notification />
                                            <notification />
                                        </div>       
                                    </div>
                                </div>
                                <div class='col-sm-6 col-lg-3'>
                                    <div class="bgc-white p-10 n-color-pallete select-form" >
                                        <div class="row">
                                            <div class="col-9 layer w-100 mB-10">
                                                <h4 class="lh-1">Problemas en</h4>
                                            </div>
                                            <div class="col-3 text-right">
                                                <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">10</span>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="layer w-100">
                                            <notification />
                                            <notification />
                                            <notification />
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
import Notification from '@/components/Notification';

export default {
    name : 'notificaciones',
    components : {
        Sidebar,
        Navbar,
        Notification,
    },
    data () {
        return {
            datasource : [],
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