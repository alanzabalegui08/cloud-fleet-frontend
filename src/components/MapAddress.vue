<template>
    <div class="row">
        <div class="col-md-12">
            <h3>Direccion</h3>
        </div>
        <div class="form-group col-md-12">
            <label for="inputName">Direccion</label>
            <input type="text" class="form-control" name="Nombre" v-model="client.name">
            <span style="color:red;"></span>
        </div>
        <div class="form-group col-md-12">
            <button class="btn btn-primary">Verificar</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "map-address",
    data() {
        return {
            address: {
                fulladdress: '',
                street: '',
                suburb: '',
                postalcode: '',
                state: '',
                city: '',
            }
        };
    },
    computed: {},
    mounted () {},
    methods: {}
};
</script>