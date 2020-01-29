<template>
    <div class="row m-0 m-lg-3">
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-0">
                    <ValidationObserver v-slot="{handleSubmit}">
                    <form @submit.prevent="handleSubmit(onSubmit)">
                        <bar-submit :title="titleBar"  @cancelar="cancelar"></bar-submit>
                        <div class="row">
                            <div class="col-md-12 mT-0">
                                <form-truck ref="formTruck"></form-truck>
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

import FormTruck from '@/components/FormTruck';
import BarSubmit from '@/components/BarSubmit';
export default {
    name : 'create',
    components : {
        FormTruck,
        BarSubmit
    },
    data () {
        return {
            titleBar : 'Nueva unidad'
        }
    },
    created (){
    },
    computed : {
    },
    methods : {
        onSubmit(){
            this.$refs.formTruck.handleTruck();
            this.$router.push('/unidades');
        },
        cancelar(){
            this.$router.push('/unidades');
        }
    }
}
</script>