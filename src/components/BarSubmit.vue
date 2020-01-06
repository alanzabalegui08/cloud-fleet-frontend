<template>
    <div class="row">
        <div class="col-7">
            <h2 class="title-klay">{{title}}</h2>
        </div>
        <div class="col-5 text-right">
            <button type="submit" class="btn cur-p btn-outline-success mr-5 btn-md">Guardar</button>
            <button @click="cancelar" class="btn cur-p btn-outline-danger btn-md">Cancelar</button>
            <button type="submit" class="btn cur-p btn-outline-success mr-3 btn-xs" title="Guardar">
                <i class="fa fa-floppy-o" aria-hidden="true"></i>
            </button>
            <button @click="cancelar" class="btn cur-p btn-outline-danger btn-xs" title="Cancelar">
                <i class="fa fa-times" aria-hidden="true"></i>
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