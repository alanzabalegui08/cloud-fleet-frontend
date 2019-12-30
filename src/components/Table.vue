<template>
<div class="table-responsive">
    <table id="table_turn" class="table"> 
        <thead>
            <tr >
                <th v-for="(colum,index) in colums" :key="index" ><h4> {{colum.columname}}</h4></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.area}}</td>
                <td>{{item.text_color}}</td>
                <td >{{item.backgroud_color}}</td>                
                <td >
                    <button type="button" class="btn cur-p btn-outline-danger mr-3"  @click="handlerDelete(item)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    <button type="button" class="btn cur-p btn-outline-success mr-3" @click="handlerDelete(item)"><i class="fa fa-location-arrow" aria-hidden="true"></i></button>
                    <button type="button" class="btn cur-p btn-outline-primary mr-3" @click="handlerEdit(item)"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name : 'table-klay',
    props : {
        list : {
            type : Array
        },
        colums : {
            type : Array
        },
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
            console.log(" [ KLAY Delete] : method delete");
            this.$emit('onDeleteItem',item);
        },
        handlerEdit(item){
            console.log(" [ KLAY Edit] : method edit");
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