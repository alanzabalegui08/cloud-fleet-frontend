<template>
    <div class="ai-sb fxw-nw bgc-white select-form mB-10">
        <div class="row p-10">
            <div class="col-9 w-100 ">
                <h4 class="lh-1">Green Point - Lomas del sur 2</h4>
            </div>
            <div class="col-3 text-right">
                <span>
                    <i class="fa fa-exclamation" aria-hidden="true" style="color:red;font-size:18pt;"></i>
                </span>
            </div>
            <div class="col-md-12">
                <p>Esta es una notificacion de prueba para todos los modulos de esta a aplicacion</p>
            </div>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-6">
                        <span>13/01/20 12:00 PM</span>
                    </div>
                    <div class="col-6 text-right">
                        <span class="m-10"><i class="fa fa-times c-red-500" aria-hidden="true" style="font-size:18pt;"></i></span>
                        <span><i class="fa fa-eye c-blue-500" aria-hidden="true" style="font-size:18pt;"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'notificaciones',
    data () {
        return {
            datasource : [],
        }
    },
    created (){
    },
    computed : {
    },
    methods : {

    }
}
</script>