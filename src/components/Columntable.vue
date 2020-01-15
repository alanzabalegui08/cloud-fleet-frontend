<template>
    <div >
        <span v-if="type === 'text' ">{{value}}</span>
        <span class="text-center" v-if="type === 'color' ">
            <div class="mx-auto w-10 p-3" v-tooltip.top-center="value" :style="{ height: 30 +'px', width: 30 + 'px',backgroundColor : value}" ></div></span>
        <div  v-if="type === 'accion' ">
            <button type="button" class="btn cur-p btn-outline-danger mr-3"  @click="onDeleteItem(item)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            <button type="button" class="btn cur-p btn-outline-success mr-3" ><i class="fa fa-location-arrow" aria-hidden="true"></i></button>
            <button type="button" class="btn cur-p btn-outline-primary mr-3" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'column-table',
    props : {
        value : {
            type : String,
        },
        item : {
            type : Object,
        },
        type : {
            type : String,
        }
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
        onDeleteItem(item){
            this.$emit('onDeleteItem',item);
        },
    }
}
</script>
<style>

</style>