<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row  pL-20 ">
                        <div class="layer w-100 ">
                            <h2 class="klay-title">Alertas</h2>
                        </div>
                    </div>
                    <div class="row gap-20 masonry pos-r">
                        <div class="col-md-6"></div> 
                        <div class="w-100">
                            <div class="row gap-20">
                                <div class='col-md-3 alerts-card' @click="clickAlert('UNIDADES DE BAJO RENDIMIENTO')">
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="title-alert-klay">UNIDADES DE BAJO RENDIMIENTO</h4>
                                            <br>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 fa fa-tachometer" aria-hidden="true"
                                                        style="font-size: 35px; color: red;"></i>
                                                </div>
                                                <div class="peer">
                                                    <span
                                                        class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 bgc-red-50 c-red-500"
                                                        style="font-size: 35px;">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3 alerts-card' @click="clickAlert('CARGAS NO RECONOCIDAS')">
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="title-alert-klay">CARGAS NO RECONOCIDAS</h4>
                                            <br>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 fa fa-question" aria-hidden="true"
                                                        style="font-size: 35px; color: #ffc107;"></i>
                                                </div>
                                                <div class="peer">
                                                    <span
                                                        class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 bgc-yellow-50 c-yellow-500"
                                                        style="font-size: 35px;">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3 alerts-card' @click="clickAlert('UNIDADES CON BAJA PRODUCTIVIDAD')" >
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="title-alert-klay">UNIDADES CON BAJA PRODUCTIVIDAD</h4>
                                            <br>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 fa fa-bar-chart" aria-hidden="true"
                                                        style="font-size: 35px; color: #4caf50 ;"></i>
                                                </div>
                                                <div class="peer">
                                                    <span
                                                        class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 bgc-green-50 c-green-500"
                                                        style="font-size: 35px;">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3 alerts-card' @click="clickAlert('OPERADORES CON INCIDENCIA')">
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="title-alert-klay">OPERADORES CON INCIDENCIA</h4>
                                            <br>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 fa fa-user" aria-hidden="true"
                                                        style="font-size: 35px; color: #2196f3 ;"></i>
                                                </div>
                                                <div class="peer">
                                                    <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 bgc-blue-50 c-blue-500" style="font-size: 35px;">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3 alerts-card' @click="clickAlert('VER TODAS LAS ALERTAS')">
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="title-alert-klay">VER TODAS LAS ALERTAS</h4>
                                            <br>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 fa fa-file" aria-hidden="true"
                                                        style="font-size: 35px; color: #b9c2d0 ;"></i>
                                                </div>
                                                <div class="peer">
                                                    <span
                                                        class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 bgc-grey-50 c-grey-500"
                                                        style="font-size: 35px;">10</span>
                                                </div>
                                            </div>
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

export default {
    name: 'notification',
    components: {
        Sidebar,
        Navbar,
    },
    data() {
        return {
            datasource: [],
        }
    },
    created() {

    },
    computed: {},
    methods: {

        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        },
        clickAlert(title) {
            this.$router.push(
                { 
                    name: 'alertadetalles',
                    params: {
                        title: title,
                        data : this.datasource
                    }
                }
            );
        }
    }
}
</script>