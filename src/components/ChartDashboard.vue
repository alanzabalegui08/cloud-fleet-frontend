<template>
    <div class="col-md-12 col-lg-8 ">
        <h5 class="title-klay">{{title}}</h5>
        <GChart type="LineChart" :data="chartData" :options="chartOptions" style="height:550px;" />
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
    name : 'chart-dashboard',
    props : {
        title : {
            type : String
        },
    },
    components : {
        GChart,
    },
    data () {
        return {
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