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
                                            <h4 class="lh-1">CATÁLOGO</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-list" aria-hidden="true" style="font-size: 45px; color: red;"></i>
                                                </div>
                                                <div class="peer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">MONITOR</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-laptop" aria-hidden="true" style="font-size: 45px; color: #ffc107;"></i>
                                                </div>
                                                <div class="peer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">PROGRAMACIÓN</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-list-alt" aria-hidden="true" style="font-size: 45px; color: #4caf50 ;"></i>
                                                </div>
                                                <div class="peer">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">NOTIFICACIONES</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-bell" aria-hidden="true" style="font-size: 45px; color: #2196f3;"></i>
                                                </div>
                                                <div class="peer">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">REPORTES</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-file-text-o" aria-hidden="true" style="font-size:45px; color: #b9c2d0 ;"></i>
                                                </div>
                                                <div class="peer">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">COMBUSTIBLE</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-bus" aria-hidden="true" style="font-size: 45px; color: #12821a ;"></i>
                                                </div>
                                                <div class="peer">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-3'>
                                    <div class="layers bd bgc-white p-20">
                                        <div class="layer w-100 mB-10">
                                            <h4 class="lh-1">GRAFICA</h4>
                                        </div>
                                        <div class="layer w-100">
                                            <div class="peers ai-sb fxw-nw">
                                                <div class="peer peer-greed">
                                                    <i class="fa fa-line-chart" aria-hidden="true" style="font-size: 45px; color: #3892d4;"></i>
                                                </div>
                                                <div class="peer">
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
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default {
    name : 'home',
    components : {
        Sidebar,
        Navbar
    },
    data () {
        return {
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