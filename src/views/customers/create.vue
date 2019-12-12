<template>
    <div class="row gap-20 masonry pos-r">
        <div class="masonry-item colo-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-30">
                    <div class="row">
                        <div class="col-md-12">
                            <form @submit.prevent="handleSubmit">
                                <div class="row">
                                    <div class="masonry-sizer col-md-10">
                                        <h2 >Nuevo cliente</h2>
                                    </div>
                                    <div class="masonry-sizer col-md-1">
                                         <button type="submit" class="btn cur-p btn-outline-success" >Guardar</button>
                                    </div>
                                    <div class="masonry-sizer col-md-1">
                                         <button @click="cancelar" class="btn cur-p btn-outline-danger" >Cancelar</button>
                                    </div>                                    
                                </div>                            
                                <form-client></form-client>
                            </form>
                        </div>
                    </div>
                </div>
            </div>                            
        </div>
    </div>
</template>

<script>

import FormClient from '../../components/FormClient';
export default {
    name : 'create',
    components : {
        FormClient
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
        handleSubmit(){
            this.$emit('create');
            this.$router.push('/clientes');
        },
        cancelar(){
            this.$router.push('/clientes');
        }
    }
}
</script>