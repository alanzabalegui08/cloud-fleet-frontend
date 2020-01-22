<template>
    <div class="row">
        <div class="col-md-12">
            <router-link class="title-form-klay" style="color:#2196f3;" to="/unidades">/ Unidades / Nueva unidad
            </router-link>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="bgc-white mT-10">
                <div class="mT-0">
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="">
                                        <img class="img-profile" :src="truck.image" />
                                    </div>
                                    <span class="btn cur-p btn-outline-primary btn-file" style="width:100%;">
                                        Buscar <input type="file" @change="onFileChange($event)">
                                    </span>
                                </div>
                                <div class="col-md-9 border-form-right p-0">
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Num. Unidad</label>
                                        <ValidationProvider vid="num_unidad" name="Num. de unidad"
                                            rules="required|alpha_num" v-slot="{ errors }">
                                            <input type="text" class="form-control" v-model="truck.numUnidad"
                                                placeholder="">
                                            <span style="color:red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Operador</label>
                                        <input type="text" class="form-control" v-model="truck.driver" placeholder="">
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Tipo</label>
                                        <select class="form-control" v-model="truck.type">
                                            <option v-for="(unidad,index) in selectUnidadType" :key="index"
                                                :value="unidad.id">{{unidad.name}}</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputPassword">Comentario</label>
                                        <input type="text" class="form-control" v-model="truck.comment" placeholder="">
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="form-group col-md-4">
                                                <label for="inputPassword">Modelo</label>
                                                <ValidationProvider vid="model" name="Modelo" rules="required|alpha_num"
                                                    v-slot="{ errors }">
                                                    <input type="text" class="form-control" v-model="truck.model"
                                                        placeholder="">
                                                    <span style="color:red;">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputPassword">Marca</label>
                                                <ValidationProvider vid="marca" name="Marca" rules="required|alpha_num"
                                                    v-slot="{ errors }">
                                                    <input type="text" class="form-control" v-model="truck.marca"
                                                        placeholder="">
                                                    <span style="color:red;">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputPassword">Sub-Marca</label>
                                                <input type="text" class="form-control" v-model="truck.subMarca"
                                                    placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 pL-15">
            <div class="bgc-white mT-10">
                <div class="mT-0">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Placas</label>
                            <input type="text" class="form-control" v-model="truck.placas" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Tipo de Placas</label>
                            <input type="text" class="form-control" v-model="truck.tipoPlacas" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Combustible </label>
                            <ValidationProvider vid="combustible" name="Combustible" rules="required"
                                v-slot="{ errors }">
                                <select class="form-control" v-model="truck.combustible">
                                    <option v-for="(combustible, index) in selectCombustible" :key="index"
                                        :value="combustible.id"> {{combustible.name}} </option>
                                </select>
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Rendimiento</label>
                            <ValidationProvider vid="rendimiento" name="Rendimiento" rules="required"
                                v-slot="{ errors }">
                                <input type="number" class="form-control" v-model="truck.performance" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Máquina</label>
                            <ValidationProvider vid="maquina" name="Máquina" rules="required|alpha_num"
                                v-slot="{ errors }">
                                <input type="text" class="form-control" v-model="truck.machine" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">No serie</label>
                            <ValidationProvider vid="numserire" name="no serie" rules="required" v-slot="{ errors }">
                                <input type="number" class="form-control" v-model="truck.noSerie" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Póliza</label>
                            <input type="text" class="form-control" v-model="truck.poliza" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Vigencia de póliza</label>
                            <input type="text" class="form-control" v-model="truck.vigenciaPoliza" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Tel. Aseguradora</label>
                            <input type="text" class="form-control" v-model="truck.cellphoneSeguro" placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="inputPassword">Clave Trackjack</label>
                            <input type="text" class="form-control" v-model="truck.claveTrackJack" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Serie Ceiba</label>
                            <input type="text" class="form-control" v-model="truck.serieCeiba" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputtext">Región</label>
                            <input type="text" class="form-control" v-model="truck.region" placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="inputtext">Mantenimiento</label>
                            <input type="text" class="form-control" v-model="truck.mantenimineto" placeholder="">
                        </div>
                        <div class="form-group col-md-4">
                            <div class="">Taller</div>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" v-model="truck.taller" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-md-4">
                            <div class="">Tirada</div>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" v-model="truck.tirada" />
                                    </label>
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
import { mapActions } from "vuex";
import { truckModel } from "../util/model";
import { SELECT_UNIDAD, SELECT_COMBUSTIBLE } from "../util/datafield";

export default {
    name: 'form-truck',
    components: {},
    data() {
        return {
            truck: truckModel(),
            selectUnidadType: SELECT_UNIDAD,
            selectCombustible: SELECT_COMBUSTIBLE,
        }
    },
    created() {
        //this.$parent.$on('create',this.handClient)
    },
    computed: {

    },
    methods: {
        ...mapActions({
            'add': 'truck/createTruck',
        }),

        handleTruck() {
            this.add(this.truck);
        },

        onFileChange(e) {
            const file =  e.target.files[0];
            this.truck.image = URL.createObjectURL(file);
        }
    }
}
</script>