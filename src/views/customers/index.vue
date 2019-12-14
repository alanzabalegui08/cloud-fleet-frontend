<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import $ from 'jquery';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

export default {
    name : 'home',
    components : {
        Sidebar,
        Navbar,
    },
    data () {
        return {
        }
    },
    created (){
    },
    computed : {

        ...mapGetters({
            clients: 'client/getClients'
        })
    },
    methods : {
        showModal() {
            let element = this.$refs.modal.$el;
            $(element).modal('show');
        }
    }
}
</script>