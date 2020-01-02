<template>
    <div class="row gap-20 masonry pos-r">
        <div class="masonry-item col-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-10">
                    <ValidationObserver v-slot="{handleSubmit}">
                    <form @submit.prevent="handleSubmit(onSubmit)">
                        <div class="row">
                            <div class="masonry-sizer col-md-6">
                                <h2>Nuevo cliente</h2>
                            </div>
                            <div class="masonry-sizer col-md-6">
                                <button type="submit" class="btn cur-p btn-outline-success mr-5">Guardar</button>
                                <button @click="cancelar" class="btn cur-p btn-outline-danger">Cancelar</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <form-client ref="clientForm"></form-client>
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

import FormClient from '../../components/FormClient';
import { mapGetters } from 'vuex';
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
        ...mapGetters({
            existsgTurn : 'turn/existsgTurn'
        })
    },
    methods : {
        onSubmit(){
            if(this.existsgTurn){
                this.$refs.clientForm.handClient();
                this.$router.push('/clientes');
                return;
            }
            this.$toasted.show('Debes agregar al menos un turno',{
                position: "top-right", 
                duration : 5000
            });
            //this.$router.push('/clientes');
        },
        cancelar(){
            this.$router.push('/clientes');
        }
    }
}
</script>