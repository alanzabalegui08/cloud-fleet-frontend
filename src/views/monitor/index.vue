<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div  class="row">
                        <h4 class="title-klay pT-10 pl-3 pl-md-1" >Monitor</h4>
                    </div>
                    <div class="row">
                        <div class="col-md-2 p-0 p-sm-10" >
                            <filter-monitor />
                        </div>
                        <div class="col-md-10 pL-10">
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
import GoogleMap from '@/components/GoogleMap'
import FilterMonitor from '@/components/FilterMonitor'
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