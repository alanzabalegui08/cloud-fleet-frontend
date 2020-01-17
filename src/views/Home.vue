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
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">Operadosres Conectados</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <span id="sparklinedash">
                                                        <a href="/"><img :src="driver" alt="" :style="{ height: 35 + 'px', }" class="m-15"></a>
                                                    </span>
                                                </div>
                                                <div class="peer py-3">
                                                    <span
                                                        class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">Unidades activas</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <span id="sparklinedash">
                                                        <a href="/"><img :src="bus" alt=""
                                                                :style="{ height: 35 + 'px', }" class="m-15"></a>
                                                    </span>
                                                </div>
                                                <div class="peer py-3">
                                                    <span
                                                        class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">Acumulado de notificaciones</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <span id="sparklinedash">
                                                        <a href="/"><img :src="notification" alt=""
                                                                :style="{ height: 35 + 'px', }" class="m-15"></a>
                                                    </span>
                                                </div>
                                                <div class="peer py-3">
                                                    <span
                                                        class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">Alertas de combustible</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <span id="sparklinedash">
                                                        <a href="/"><img :src="gas" alt=""
                                                                :style="{ height: 35 + 'px', }" class="m-15"></a>
                                                    </span>
                                                </div>
                                                <div class="peer py-3">
                                                    <span
                                                        class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 ">
                                    <div class="row">
                                        <div class="col-12 col-md-8 ">
                                            <h5 class="title-klay">Información de actividad</h5>
                                            <GChart type="LineChart" :data="chartData" :options="chartOptions"
                                                style="height: 550px;" />
                                        </div>
                                        <div class="col-12 col-md-4 ">
                                            <h5 class="title-klay">Ultimos clientes activos</h5>
                                            <div class="bd bgc-white">
                                                <div class="layers">
                                                    <div class="layer w-100">
                                                        <div class="bgc-light-blue-500 c-white p-20">
                                                            <div class="peers ai-c jc-sb gap-40">
                                                                <div class="peer peer-greed">
                                                                    <h5>Enero 2020</h5>
                                                                    <p class="mB-0">Resumen de clientes</p>
                                                                </div>
                                                                <div class="peer">
                                                                    <h3 class="text-right">7</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="table-responsivee p-20">
                                                            <table class="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th class=" bdwT-0">Nombre</th>
                                                                        <th class=" bdwT-0">Status</th>
                                                                        <th class=" bdwT-0">Fecha</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="fw-600">Item #1 Name</td>
                                                                        <td>
                                                                            <span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">No activo</span>
                                                                        </td>
                                                                        <td>Ene 18</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="fw-600">Item #2 Name</td>
                                                                        <td>
                                                                            <span class="badge bgc-deep-purple-50 c-deep-purple-700 p-10 lh-0 tt-c badge-pill">Nuevo</span>
                                                                        </td>
                                                                        <td>Ene 19</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="fw-600">Item #3 Name</td>
                                                                        <td>
                                                                            <span class="badge bgc-pink-50 c-pink-700 p-10 lh-0 tt-c badge-pill">Nuevo</span>
                                                                        </td>
                                                                        <td>Ene 20</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="fw-600">Item #4 Name</td>
                                                                        <td>
                                                                            <span class="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c badge-pill">Activo</span>
                                                                        </td>
                                                                        <td>Ene 21</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="fw-600">Item #5 Name</td>
                                                                        <td>
                                                                            <span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">Alerta</span>
                                                                        </td>
                                                                        <td>Ene 22</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ta-c bdT w-100 p-20">
                                                    <a href="#">Checar todos los clientes</a>
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
import personDriver from '@/assets/static/images/driver_purple.png';
import bus from '@/assets/static/images/autobus_color.png';
import notification from '@/assets/static/images/campana_color.png';
import gas from '@/assets/static/images/combustible_color.png';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { GChart } from 'vue-google-charts';

export default {
    name : 'home',
    components : {
        Sidebar,
        Navbar,
        GChart,
    },
    data () {
        return {
            driver : personDriver,
            bus : bus,
            notification : notification,
            gas : gas,
            chartData: [
                ['City', '', { role: 'style' }],
                ['Factores extremos - Trafico', 8175000,'#43a047'],
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
    created (){
    },
    computed : {
    },
    methods : {

    }
}
</script>