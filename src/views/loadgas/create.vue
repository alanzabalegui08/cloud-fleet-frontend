<template>
    <div class="row gap-20 masonry pos-r">
        <div class="masonry-item colo-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-10">
                    <ValidationObserver v-slot="{handleSubmit}">
                    <form @submit.prevent="handleSubmit(onSubmit)">
                        <div class="row">
                            <div class="masonry-sizer col-md-6">
                                <h2>Carga de combustible</h2>
                            </div>
                            <div class="masonry-sizer col-md-6">
                                <button type="submit" class="btn cur-p btn-outline-success mr-5">Guardar</button>
                                <button @click="cancelar" class="btn cur-p btn-outline-danger">Cancelar</button>
                            </div>
                        </div>
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

import FormLoadgas from '../../components/FormLoadgas';
export default {
    name : 'create',
    components : {
        FormLoadgas,
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
        onSubmit(){
            this.$router.push('/carga-combustible');
        },
        cancelar(){
            this.$router.push('/carga-combustible');
        }
    }
}
</script>