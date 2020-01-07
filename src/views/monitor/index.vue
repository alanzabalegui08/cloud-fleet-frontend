<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="row">
                        <div class="col-md-2">
                            <filter-monitor />
                        </div>
                        <div class="col-md-10">
                            <div class="bgc-white p-10" style="height:850px">
                                <google-map style="height:100%"/>
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