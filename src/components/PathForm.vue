<template>
    <div class="row">
        <div class="col-md-12">
            <router-link class="title-form-klay" style="color:#2196f3;"  to="/rutas">/ Rutas / Nueva ruta </router-link>
        </div>        
        <div class="col-md-4 border-form-right">
            <div class="bgc-white p-10 ">
                <div class="mT-10">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputName">Nombre Ruta</label>
                            <ValidationProvider vid="text" name="Nombre Ruta" rules="required" v-slot="{ errors }">
                                <input type="text" class="form-control" v-model="route.name" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Cliente</label>
                            <ValidationProvider vid="cliente" name="Cliente" rules="required" v-slot="{ errors }">
                                <input type="text" class="form-control" v-model="route.customer" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Tolerancia</label>
                            <ValidationProvider vid="tolerancia" name="Tolerancia" rules="required" v-slot="{ errors }">
                                <input type="text" class="form-control" v-model="route.tolerancia" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Kilometraje</label>
                            <ValidationProvider vid="kilometraje" name="Kilometraje" rules="required"
                                v-slot="{ errors }">
                                <input type="number" class="form-control" v-model="route.kilometers" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Tipo Ruta</label>
                            <ValidationProvider vid="tiporuta" name="Tipo de ruta" rules="required" v-slot="{ errors }">
                                <input type="text" class="form-control" v-model="route.route_type" placeholder="">
                                <span style="color:red;">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Precio Operador</label>
                            <input type="text" class="form-control" v-model="route.driver_price" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Precio Cliente</label>
                            <input type="text" class="form-control" v-model="route.customer_price" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8 border-form" >
            <div class="bgc-white p-10">
                <div class="mT-10">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputName">Activo</label>
                            <div class="form-group"> 
                                <input class="" type="checkbox" v-model="route.active" />
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Url Ruta Entrada</label>
                            <input type="text" class="form-control" v-model="route.url_route_input"
                                :disabled="!route.active" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">URL Ruta Salida</label>
                            <input type="text" class="form-control" :disabled="!route.active"
                                v-model="route.url_route_output" placeholder="">
                        </div>
                    </div>
                    <fieldset>
                        <legend class=""><span class="title-form-klay">Turno</span></legend>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputName">Nombre</label>
                                <input type="text" class="form-control" v-model="turn.name">
                            </div>
                            <div class="form-group col-md-2">
                                <label>Entrada</label>
                                <select class="form-control" v-model="turn.input">
                                    <option v-for="(time,index) in selectTime" :key="index">{{time.name}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label>Salida</label>
                                <select class="form-control" v-model="turn.output">
                                    <option v-for="(time,index) in selectTime" :key="index">{{time.name}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label>Sentido</label>
                                <select class="form-control" v-model="turn.sentido">
                                    <option v-for="(away,index) in awayOptions" :key="index">{{away.name}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputName">Código</label>
                                <input type="text" class="form-control" v-model="turn.code">
                            </div>
                            <div class="form-group col-md-1">
                                <button type="button" class="btn cur-p btn-outline-danger mT-25"
                                    @click="addTrun"><i class="fa fa-plus" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="table-responsive">
                <table id="" class="table" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Nombre Turno</th>
                            <th>Hora inicio </th>
                            <th>Hora fin</th>
                            <th>Sentido</th>
                            <th>Codigo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(turn, index) in route.turns" :key="index">
                            <td>{{turn.name}}</td>
                            <td>{{turn.input}}</td>
                            <td>{{turn.output}}</td>
                            <td>{{turn.sentido}}</td>
                            <td>{{turn.code}}</td>
                            <td>
                                <button type="button" class="btn cur-p btn-outline-danger" @click="removeTurn(turn)">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {
    SELECT_TURN,
    SELECT_TIME
} from "../util/datafield";
import { mapActions } from 'vuex';
export default {
    name: 'form-path',
    components: {
    },
    data() {
        return {
            route: {
                name: 'name',
                customer: 'customer',
                tolerancia: '2',
                kilometers: '2',
                route_type: '2',
                driver_price: '100',
                customer_price: '100',
                url_route_input: 'www.thisistest.com',
                url_route_output: 'www.thisistest.com',
                active: false,
                turns: [],
            },
            turn: {
                name: '',
                input: '',
                output: '',
                sentido: '',
                code: '',
            },
            awayOptions: SELECT_TURN,
            selectTime: SELECT_TIME
        }
    },
    created() {},
    computed: {

    },
    methods: {
        ...mapActions({
            'add' : 'path/createPath',
        }),

        addTrun() {
            this.route.turns.push({
                ...this.turn
            });
        },

        removeTurn(turn) {
            const indexTurn = this.route.turns.findIndex(item => item.id === turn.id);
            this.route.turns.splice(indexTurn, 1);
        },

        handlepPath() {            
            this.add(this.route);
        }
    }
}
</script>

<style>
    .table-responsive {
        height: 200px;
    }
</style>