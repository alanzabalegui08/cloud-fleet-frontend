<template>
    <div class="row">
        <div class="col-8 pR-0">
            <h2 class="title-klay">{{title}}</h2>
        </div>
        <div class="col-4 pl-0 text-right align-self-center">
            <button @click="cancelar" class="btn cur-p btn-outline-danger mR-20 btn-md">Cancelar</button>
            <button type="submit" class="btn cur-p btn-outline-success btn-md">Guardar</button>

            <button @click="cancelar" class="btn cur-p btn-outline-danger mr-3 btn-xs" title="Cancelar">
                <i class="fa fa-times" aria-hidden="true"></i>
            </button>
            <button type="submit" class="btn cur-p btn-outline-success btn-xs" title="Guardar">
                <i class="fa fa-floppy-o" aria-hidden="true"></i>
            </button>
        </div>
    </div>   
</template>

<script>

export default {
    name : 'bar-submit',
    components : {
        
    },
    props : {
        title : {
            type : String,
        },
    },
    data () {
        return {
        }
    },
    created () {
    },
    computed : {
    },
    methods : {
        cancelar() {
             this.$emit('cancelar');
        }

    }
}
</script>