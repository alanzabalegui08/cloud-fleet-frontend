<template>
    <div class="row">
        <div class="col-md-12">
            <span  class="title-form-klay" style="color:#2196f3;">/ Banner / Nuevo banner </span>
        </div>          
        <div class="  col-md-12">
            <div class="bgc-white " >
                <div class="mT-10">
                    <div class="form-row">
                        <div class="col-md-5">
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="inputName">Imagen</label>
                                    <input type="file" class="form-control" id=""  placeholder="">
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="inputName">Nombre</label>
                                    <input type="text" class="form-control" id="" v-model="banner.name" placeholder="">
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="inputName">Descripción</label>
                                    <input type="text" class="form-control" id="" v-model="banner.description" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <img style="width:100%;" src="https://via.placeholder.com/700x300.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapActions
} from 'vuex'

export default {
    name: 'form-supervisor',
    components: {},
    data() {
        return {
            banner: {
                title: '',
                name: '',
                description: ''
            },
        }
    },
    created() {
        //this.$parent.$on('create',this.handClient)
    },
    computed: {

    },
    methods: {
        ...mapActions({
            'add': 'banner/createBanner',
        }),

        handleBanner() {
            this.add(this.banner);
        }
    }
}
</script>