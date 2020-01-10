<template>
    <div class="mT-10">
        <fieldset>
            <legend class=""><span class="title-form-klay">Turnos</span></legend>
            <div class="form-row">
                <div class="form-group col-md-7">
                    <label for="inputName">Nombre</label>
                    <input type="text" class="form-control" id="name_client" v-model="turno.name">
                </div>
                <div class="form-group col-md-2">
                    <label>Entrada</label>
                    <select class="form-control" id="color_client" v-model="turno.input">
                        <option v-for="(time,index) in turnTime" :key="index">{{time.name}}</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label>Salida</label>
                    <div class="row">
                        <select class="form-control col mL-15" id="color_down" v-model="turno.output">
                            <option v-for="(time,index) in turnTime" :key="index">{{time.name}}</option>
                        </select>
                        <button type="button" class="col-4 btn cur-p btn-outline-danger mL-10 mR-15" 
                            @click="handleTurn()"><i class="fa fa-plus" aria-hidden="true"></i></button> 
                    </div>         
                </div>
            </div>
        </fieldset>
        <div class="table-responsive">
            <table id="table_turn" class="table">
                <thead>
                    <tr>
                        <th class="col-md-5">Nombre Turno</th>
                        <th class="col-md-3">Entrada</th>
                        <th class="col-md-3">Salida</th>
                        <th class="col-md-1 text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(turno,index) in list" :key="index">
                        <td class="col-md-5" >{{turno.name}}</td>
                        <td class="col-md-3" >{{turno.input}}</td>
                        <td class="col-md-3" >{{turno.output}}</td>
                        <td class="col-md-1 text-center">
                            <button type="button" class="btn cur-p btn-outline-danger" @click="removeTurn(turno)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    import {
        mix
    } from "../util/mixins";
    import { alerts } from '@/util/alerts'
    import {
        SELECT_TIME
    } from '../util/datafield';
    export default {
        name: 'turno',
        mixins: [mix,alerts],
        props: {
            turn: {
                type: Object
            }
        },
        data() {
            return {
                turno: {
                    name: '',
                    output: '',
                    input: '',
                },
                turnTime: SELECT_TIME,
            }
        },
        created() {

        },
        computed: {
            ...mapGetters({
                list: 'turn/getTurns'
            })
        },
        methods: {
            ...mapActions({
                add: 'turn/addTurn',
                remove: 'turn/removeTurn',
            }),

            handleTurn() {
                if (this.turno.name === '') {
                    console.error('[ KLAY ERROR ] :  error campo vacio name');
                    return false;
                }
                if (this.turno.output === '') {
                    console.error('[ KLAY ERROR ] :  error campo vacio output');
                    return false;
                }
                if (this.turno.input === '') {
                    console.error('[ KLAY ERROR ] :  error campo vacio input');
                    return false;
                }
                this.add(this.turno);
            },

            removeTurn(turn) {
                console.log(turn);
                console.log('[KLAY] error turn');
                this.remove(turn)
            }
        }
    }
</script>

<style scoped>
    .table {
        width: 100%;
    }

    .table-responsive {
        height: 200px;
    }

    @media (max-width: 600px) {
        .table {
            width: 500px
        }
    }
</style>