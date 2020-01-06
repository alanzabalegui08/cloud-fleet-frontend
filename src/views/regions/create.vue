<template>
    <div class="row gap-20 masonry pos-r">
        <div class="masonry-item colo-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-10">
                    <ValidationObserver v-slot="{handleSubmit}">
                        <form @submit.prevent="handleSubmit(onSubmit)">
                            <div class="row">
                                <div class="masonry-sizer col-md-6">
                                    <h2>Nueva Región</h2>
                                </div>
                                <div class="masonry-sizer col-md-6">
                                    <button type="submit" class="btn cur-p btn-outline-success mr-5">Guardar</button>
                                    <button @click="cancelar" class="btn cur-p btn-outline-danger">Cancelar</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <form-region ref="regionFrom"></form-region>
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

import FormRegion from '../../components/FormRegion';
export default {
    name : 'create',
    components : {
        FormRegion
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
        onSubmit() {
            this.$refs.regionFrom.handleRegion();
            this.$router.push('/regiones');
        },
        cancelar(){
            this.$router.push('/regiones');
        }
    }
}
</script>