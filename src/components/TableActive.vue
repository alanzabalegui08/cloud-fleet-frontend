<template>
    <div class="col-md-12 col-lg-4">
        <h5 class="title-klay">Ultimos clientes activos</h5>
        <div class="bd bgc-white">
            <div class="layers">
                <div class="layer w-100">
                    <div class="bgc-light-blue-500 c-white p-20">
                        <div class="peers ai-c jc-sb gap-40">
                            <div class="peer peer-greed">
                                <h5>Enero 2020</h5>
                                <p class="mB-0">Resumen de clientes</p>
                            </div>
                            <div class="peer">
                                <h3 class="text-right">7</h3>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsivee p-20">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class=" bdwT-0">Nombre</th>
                                    <th class=" bdwT-0">Status</th>
                                    <th class=" bdwT-0">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="fw-600">Item #1 Name</td>
                                    <td>
                                        <span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">No
                                            activo</span>
                                    </td>
                                    <td>Ene 18</td>
                                </tr>
                                <tr>
                                    <td class="fw-600">Item #2 Name</td>
                                    <td>
                                        <span
                                            class="badge bgc-deep-purple-50 c-deep-purple-700 p-10 lh-0 tt-c badge-pill">Nuevo</span>
                                    </td>
                                    <td>Ene 19</td>
                                </tr>
                                <tr>
                                    <td class="fw-600">Item #3 Name</td>
                                    <td>
                                        <span
                                            class="badge bgc-pink-50 c-pink-700 p-10 lh-0 tt-c badge-pill">Nuevo</span>
                                    </td>
                                    <td>Ene 20</td>
                                </tr>
                                <tr>
                                    <td class="fw-600">Item #4 Name</td>
                                    <td>
                                        <span
                                            class="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c badge-pill">Activo</span>
                                    </td>
                                    <td>Ene 21</td>
                                </tr>
                                <tr>
                                    <td class="fw-600">Item #5 Name</td>
                                    <td>
                                        <span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">Alerta</span>
                                    </td>
                                    <td>Ene 22</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="ta-c bdT w-100 p-20">
                <a href="#">Checar todos los clientes</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'table-active',
    props : {

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

    }
}
</script>