<template>
    <div class="row gap-20 masonry pos-r">
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-10 bd">
                <div class="m-5">
                    <ValidationObserver v-slot="{handleSubmit}">
                    <form @submit.prevent="handleSubmit(onSubmit)">
                        <div class="row">
                            <div class="col">
                                <h2 class="title-klay">Nuevo cliente</h2>
                            </div>
                            <div class="col text-right">
                                <button type="submit" class="btn cur-p btn-outline-success mr-3 btn-md">Guardar</button>
                                <button @click="cancelar" class="btn cur-p btn-outline-danger btn-md" >Cancelar</button>

                                <button type="submit" class="btn cur-p btn-outline-success mr-3 btn-xs" title="Guardar"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>
                                <button @click="cancelar" class="btn cur-p btn-outline-danger btn-xs" title="Cancelar"><i class="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mT-0">
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

import FormClient from '@/components/FormClient';
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