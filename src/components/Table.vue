<template>
    <table id="dataTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
            <tr >
                <th v-for="(colum,index) in colums" :key="index" > {{colum.columname}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.area}}</td>
                <td>{{item.text_color}}</td>
                <td >{{item.backgroud_color}}</td>                
                <td class="text-center">
                    <button type="button" class="btn cur-p btn-outline-danger mr-3"  @click="handleDelete(item)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    <button type="button" class="btn cur-p btn-outline-success mr-3" @click="handleDelete(item)"><i class="fa fa-location-arrow" aria-hidden="true"></i></button>
                    <button type="button" class="btn cur-p btn-outline-primary mr-3" @click="handleDelete(item)"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name : 'table',
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
        handleDelete(item){
            console.log(item);
        }
    }
}
</script>