<template>
    <div class="row gap-20 masonry pos-r">
        <div class="col-xs-12 col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-0">
                    <ValidationObserver v-slot="{handleSubmit}">
                    <form @submit.prevent="handleSubmit(onSubmit)">
                        <bar-submit :title="titleBar"  @cancelar="cancelar"></bar-submit>
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
import BarSubmit from '@/components/BarSubmit';
import { mapGetters } from 'vuex';
export default {
    name : 'create',
    components : {
        FormClient,
        BarSubmit
    },
    data () {
        return {
            titleBar : 'Nuevo cliente'
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
        },
        cancelar(){
            this.$router.push('/clientes');
        }
    }
}
</script>