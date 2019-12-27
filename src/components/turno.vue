<template>
    <div class="mT-30">
        <!-- <form> -->
        <div class="form-row">
            <div class="form-group col-xs-5">
                <label for="inputName">Nombre</label>
                <input type="text" class="form-control" id="name_client" v-model="turno.name">
            </div>
            <div class="form-group col-xs-3">
                <label>Entrada</label>
                <select class="form-control" id="color_client" v-model="turno.input">
                    <option v-for="(time,index) in turnTime" :key="index">{{time.name}}</option>
                </select>
            </div>
            <div class="form-group col-xs-3">
                <label>Salida</label>
                <select class="form-control" id="color_down" v-model="turno.output">
                    <option v-for="(time,index) in turnTime" :key="index">{{time.name}}</option>
                </select>
            </div>
            <div class="form-group col-xs-1">
                <button type="button" class="btn cur-p btn-outline-danger mr-3 position-absolute"
                    @click="handleTurn()"><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        </div>
        <!-- </form> -->
        <div class="table-responsive">
            <table id="table_turn" class="table">
                <thead>
                    <tr>
                        <th>Nombre Turno</th>
                        <th>Entrada</th>
                        <th>Salida</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(turno,index) in list" :key="index">
                        <td>{{turno.name}}</td>
                        <td>{{turno.input}}</td>
                        <td>{{turno.output}}</td>
                        <td>
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
    import { mix } from "../util/mixins";
    import {
        SELECT_TIME
    } from '../util/datafield';
    export default {
        name: 'turno',
        mixins : [ mix ],
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
                console.log(this.$data);
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