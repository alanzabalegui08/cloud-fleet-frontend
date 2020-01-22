<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div  class="row">
                        <h4 class="title-klay pl-2 p-sm-10" >Monitor</h4>
                    </div>
                    <div class="row pl-1">
                        <div class="col-sm-3 col-md-3 col-lg-2 p-0 p-sm-10" >
                            <filter-monitor />
                        </div>
                        <div class="col-sm-9 col-md-9 col-lg-10 pL-10">
                            <div class="bgc-white p-10" style="height:800px">
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
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import GoogleMap from '@/components/GoogleMap';
import FilterMonitor from '@/components/FilterMonitor';
export default {
    name : 'monitor',
    components : {
        Sidebar,
        Navbar,
        GoogleMap,
        FilterMonitor,
    },
    data () {
        return {
            mapStyle : {
                height : '800px',
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