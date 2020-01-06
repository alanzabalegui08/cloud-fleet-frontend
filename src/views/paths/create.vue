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
                                <path-form ref="pathForm"></path-form>
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

import PathForm from '@/components/PathForm';
import BarSubmit from '@/components/BarSubmit';
export default {
    name : 'create',
    components : {
        PathForm,
        BarSubmit
    },
    data () {
        return {
            titleBar : 'Nueva ruta',
        }
    },
    created () {
    },
    computed : {
    },
    methods : {
        onSubmit () {
            this.$refs.pathForm.handlepPath();
            this.$router.push('/rutas');
        },
        cancelar(){
            this.$router.push('/rutas');
        }
    }
}
</script>