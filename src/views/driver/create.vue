<template>
    <div class="row gap-20 masonry pos-r">
        <div class="col pX-0">
            <div class="bgc-white p-20 bd">
                <div class="mT-0">
                    <ValidationObserver v-slot="{handleSubmit}">
                        <form @submit.prevent="handleSubmit(onSubmit)">
                            <bar-submit :title="titleBar"  @cancelar="cancelar"></bar-submit>
                            <div class="row">
                                <div class="col-md-12 mT-0">
                                    <form-driver ref="formDriver"></form-driver>
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
import FormDriver from '@/components/FormDriver';
import BarSubmit from '@/components/BarSubmit';
export default {
    name: 'create-drive',
    components: {
        FormDriver,
        BarSubmit
    },
    data() {
        return {
            titleBar : 'Nuevo operador'
        }
    },
    created() {},
    computed : {},
    methods : {
        onSubmit() {
            this.$refs.formDriver.handleDriver();
            this.$router.push('/operadores')
        },
        cancelar() {
            this.$router.push('/operadores');
        }
    }
}
</script>