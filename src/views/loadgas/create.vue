<template>
    <div class="row gap-20 masonry pos-r">
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-30">
                    <ValidationObserver v-slot="{handleSubmit}">
                    <form @submit.prevent="handleSubmit(onSubmit)">
                        <bar-submit :title="titleBar"  @cancelar="cancelar"></bar-submit>
                        <div class="row">
                            <div class="col-md-12">
                                <form-loadgas ref="loadgasForm"></form-loadgas>
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

import FormLoadgas from '@/components/FormLoadgas';
import BarSubmit from '@/components/BarSubmit';
export default {
    name : 'create',
    components : {
        FormLoadgas,
        BarSubmit,
    },
    data () {
        return {
            titleBar : 'Carga de combustible',
        }
    },
    created (){
    },
    computed : {
    },
    methods : {
        onSubmit(){
            this.$router.push('/carga-combustible');
        },
        cancelar(){
            this.$router.push('/carga-combustible');
        }
    }
}
</script>