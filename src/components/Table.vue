<template>
<div class="table-responsive">
    <table id="table_turn" class="table"> 
        <thead class="thead-dark" >
            <tr >
                <th v-for="(colum,index) in columns" :key="index" ><h5> {{colum.columname}}</h5></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in list" :key="index">
                <td v-for="(column, indexColum) in columns" :key="indexColum">
                    <columntable :value="item[column.column]" @onDeleteItem="handlerDelete(item)" :type="column.type" :item="item" ></columntable>
                </td>               
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import Columntable from "./Columntable";

export default {
    name : 'table-klay',
    props : {
        list : {
            type : Array
        },
        columns : {
            type : Array
        },
    },
    components : {
        Columntable,
    },

    data () {
        return {

        }
    },
    created (){
   
    },
    computed : {
    },
    methods : {
        handlerDelete(item){
            this.$emit('onDeleteItem',item);
        },
        handlerEdit(item){
            console.log(item);
        }
    }
}
</script>

<style scoped>
.table {
  width: 100%;
}
.table-responsive {
    height: auto;
}
@media (max-width: 600px) {
    .table {
        width: 700px
    }
}
</style>