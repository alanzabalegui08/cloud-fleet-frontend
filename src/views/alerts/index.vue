<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row gap-20 masonry pos-r">
                        <div class="masonry-sizer col-md-6"></div>
                        <div class="masonry-item  w-100">
                            <div class="row gap-20">
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">UNIDADES DE BAJO RENDIMIENTO</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-tachometer" aria-hidden="true" style="font-size: 45px; color: red;"></i>
                                                    <!-- <span id="sparklinedash"></span> -->
                                                </div>
                                                <div class="peer">
                                                    <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 bgc-red-50 c-red-500" style="font-size: 45px;">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">CARGAS COMBUSTIBLE NO RECONOCIDAS</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-question" aria-hidden="true" style="font-size: 45px; color: #ffc107;"></i>
                                                </div>
                                                <div class="peer">
                                                    <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 bgc-yellow-50 c-yellow-500" style="font-size: 45px;">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">UNIDADES CON BAJA PRODUCTIVIDAD</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-bar-chart" aria-hidden="true" style="font-size: 45px; color: #4caf50 ;"></i>
                                                </div>
                                                <div class="peer">
                                                    <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 bgc-green-50 c-green-500" style="font-size: 45px;">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">OPERADORES CON INCIDENCIA</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-user-o" aria-hidden="true" style="font-size: 45px; color: #2196f3 ;"></i>
                                                </div>
                                                <div class="peer">
                                                    <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 bgc-blue-50 c-blue-500" style="font-size: 45px;">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">OPERADORES CON INCIDENCIA</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-file-text-o" aria-hidden="true" style="font-size: 45px; color: #b9c2d0 ;"></i>
                                                </div>
                                                <div class="peer">
                                                    <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-20 pY-20 bgc-grey-50 c-grey-500" style="font-size: 45px;">10</span>
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
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

export default {
    name : 'notification',
    components : {
        Sidebar,
        Navbar,
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