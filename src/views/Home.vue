<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row gap-20 masonry pos-r">
                        <div class="col-md-6"></div>
                        <div class="w-100">
                            <div class="row gap-20">
                                <card :imgSource='driver' :title="'Operadosres Conectados'" />
                                <card :imgSource='bus' :title="'Unidades activas'" />
                                <card :imgSource='notification' :title="'Acumulado de notificaciones'" />
                                <card :imgSource='gas' :title="'Alertas de combustible'" />

                                <div class="col-12 ">
                                    <div class="row">
                                        <chart-dashboard :title="tituloChart" />
                                        <table-active />
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
import personDriver from '@/assets/static/images/driver_purple.png';
import bus from '@/assets/static/images/autobus_color.png';
import notification from '@/assets/static/images/campana_color.png';
import gas from '@/assets/static/images/combustible_color.png';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import TableActive from '@/components/TableActive';
import ChartDashboard from '@/components/ChartDashboard';

export default {
    name : 'home',
    components : {
        Sidebar,
        Navbar,
        Card,
        TableActive,
        ChartDashboard
    },
    data () {
        return {
            tituloChart : 'Información de actividad',
            driver : personDriver,
            bus : bus,
            notification : notification,
            gas : gas,
        }
    },
    created (){
    },
    computed : {
    },
    methods : {

    }
}
</script>