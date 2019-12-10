<template>
    <div>
        <sidebar></sidebar>
        <div class="page-container">
            <navbar></navbar>
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    Home
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