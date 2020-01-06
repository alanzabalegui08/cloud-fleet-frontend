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
                                    <form-supervisor ref="supervisorForm"></form-supervisor>
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

import FormSupervisor from '@/components/FormSupervisor';
import BarSubmit from '@/components/BarSubmit';
export default {
    name : 'create',
    components : {
        FormSupervisor,
        BarSubmit
    },
    data () {
        return {
            titleBar : 'Nuevo supervisor'
        }
    },
    created (){
    },
    computed : {
    },
    methods : {
        onSubmit() {
            this.$refs.supervisorForm.handleSupervisor();
            this.$router.push('/supervisor');   
        },
        cancelar(){
            this.$router.push('/supervisor');
        }
    }
}
</script>