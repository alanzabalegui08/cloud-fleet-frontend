<template>
    <div class="row gap-20 masonry pos-r">
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-10">
                    <ValidationObserver v-slot="{handleSubmit}">
                        <form @submit.prevent="handleSubmit(onSubmit)">
                            <bar-submit :title="titleBar" @cancelar="cancelar"></bar-submit>
                            <div class="row">
                                <div class="col-md-12 mT-50">
                                    <form-station ref="stationForm"></form-station>
                                </div>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>                            
        </div>
    </div>
</template>
<script>

import FormStation from '@/components/FormStation';
import BarSubmit from '@/components/BarSubmit';
export default {
    name : 'create',
    components : {
        FormStation,
        BarSubmit
    },
    data () {
        return {
            titleBar : 'Nueva estación'
        }
    },
    created (){
    },
    computed : {
    },
    methods : {
        onSubmit(){
            this.$refs.stationForm.handleStation();
            this.$router.push('/estaciones');
        },
        cancelar(){
            this.$router.push('/estaciones');
        }
    }
}
</script>