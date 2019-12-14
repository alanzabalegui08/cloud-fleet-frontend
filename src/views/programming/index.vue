<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="bgc-white bd" >
                        <div class="mT-10">
                            <bar-search/>
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
//import TableKlay from '../../components/Table';
import BarSearch from '../../components/BarSearch';

export default {
    name : 'banner',
    components : {
        Sidebar,
        Navbar,
        BarSearch,
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