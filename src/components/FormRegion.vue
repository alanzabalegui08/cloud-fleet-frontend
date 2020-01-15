<template>
    <div class="row">
        <div class="col-md-12">
            <router-link class="title-form-klay" style="color:#2196f3;"  to="/regiones">/ Regiones / Nueva región</router-link>
        </div>          
        <div class="col-md-12">
            <div class="bgc-white">
                <div class="mT-10">
                    <div class="form-row">
                        <div class="col-md-5">
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="inputName">Nombre</label>
                                    <ValidationProvider vid="name" name="Nombre" rules="required|alpha"
                                        v-slot="{ errors }">
                                        <input type="text" class="form-control" v-model="region.name" placeholder="">
                                        <span style="color:red;">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { regionModel } from "../util/model";
    import { mapActions } from 'vuex';
    export default {
        name: 'form-region',
        components: {},
        data() {
            return {
                region: regionModel(),
            }
        },
        created() {
        },
        computed : {

        },
        methods : {
            ...mapActions({
               'add' : 'region/createRegion',
            }),
            handleRegion() {
                this.add(this.region);
            }
        }
    }
</script>