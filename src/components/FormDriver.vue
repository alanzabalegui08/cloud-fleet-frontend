/* <template>
    <div class="row">
        <div class="col-md-12">
            <router-link class="title-form-klay" style="color:#2196f3;"  to="/operadores">/ Operadores / Nuevo operador</router-link>
        </div>        
        <div class="col-md-6">
            <div class="row">
                <div class="col-lg-3">
                    <div class="">
                        <img class="img-profile" :src="driver.image" />
                    </div>                   
                    <span class="btn cur-p btn-outline-primary btn-file" style="width:100%;">
                        Buscar <input type="file" @change="onFileChange($event)">
                    </span>
                </div>
                <div class="col-lg-9 pl-0" >
                    <div class="row">
                    <div class="form-group col-md-12">
                        <label for="inputName">Nombre</label>
                        <ValidationProvider vid="name" name="Nombre" rules="required|alpha" v-slot="{ errors }">
                            <input type="text" class="form-control"  v-model="driver.name" placeholder="" autocomplete="off">
                            <span style="color:red;">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputName">Apellido</label>
                        <ValidationProvider vid="lastname" name="Apellido" rules="required|alpha" v-slot="{ errors }">
                            <input type="text" class="form-control"  v-model="driver.lastname" placeholder="" autocomplete="off">
                            <span style="color:red;">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputName">Clave</label>
                        <ValidationProvider vid="clave" name="Clave" rules="alpha_num" v-slot="{ errors }">
                            <input type="text" class="form-control"  v-model="driver.clave" placeholder="" autocomplete="off"> 
                            <span style="color:red;">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputPassword">Dirección</label>                        
                        <input type="password" class="form-control"  v-model="driver.addresses" placeholder="">
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputPassword">Teléfono</label>
                        <ValidationProvider vid="phone" name="Teléfono" rules="digits:10" v-slot="{ errors }">
                            <input type="text" class="form-control"  v-model="driver.phone" placeholder="">
                            <span style="color:red;">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 pL-15">
            <div class="bgc-white ">
                <div class="mT-10">
                        <div class="row">
                            <div class="form-group col-md-6 ">
                                <label for="inputPassword">Celular</label>
                                <ValidationProvider vid="cellphone" name="Celular" rules="digits:10" v-slot="{ errors }">
                                    <input type="text" class="form-control"  v-model="driver.cellphone" placeholder="">
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>                                    
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword">Celular de red</label>
                                <ValidationProvider vid="cellphonenewtword" name="Celular de red" rules="digits:10" v-slot="{ errors }">
                                    <input type="text" class="form-control"  v-model="driver.cellphone_network" placeholder="">
                                    <span style="color:red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="inputPassword">RFC</label>
                            <input type="text" class="form-control"  v-model="driver.rfc" placeholder="">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputtext">Num. Seguro Social</label>
                            <input type="text" class="form-control"  v-model="driver.seguroSocial" placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-3">
                            <label for="inputtext">Num. Licencia Estatal </label>
                            <input type="text" class="form-control"  v-model="driver.noLicenciaEstatal" placeholder="">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputtext">Vig. Licencia Estatal </label>
                            <date-picker class="form-control" name="date" v-model="driver.vigLicenciaEstatal" :config="options" autocomplete="off"></date-picker >
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputtext">Num. Licencia Federal </label>
                            <input type="text" class="form-control"  v-model="driver.noLicenciaFederal" placeholder="">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputtext">Vig. Licencia Federal </label>
                            <date-picker class="form-control" name="date" v-model="driver.vigLicenciaFederal" :config="options" autocomplete="off"></date-picker>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="inputtext">Contraseña XR a Bordo</label>
                            <input type="password" class="form-control"  v-model="driver.passwordXR" placeholder="">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputtext">Tipo de sangre</label>
                            <input type="text" class="form-control"  v-model="driver.typeBlood" placeholder="">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputtext">Región</label>
                            <input type="text" class="form-control"  v-model="driver.region" placeholder="">
                        </div>
                        <div class="form-group col-md-6">
                            <div class="">Activo</div>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" v-model="driver.active" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    driverModel
} from "@/util/model";
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import {
    mapActions
} from 'vuex';

export default {
    name: 'form-driver',
    components: {
        datePicker,
    },
    data() {
        return {
            driver: driverModel(),
            date: new Date(),
            options: {
                format: 'DD/MM/YYYY h:mm:ss',
                useCurrent: false,
                showClear: true,
                showClose: true,
                locale: 'es-es'
            }
        }
    },
    created() {},
    computed: {

    },
    methods: {
        ...mapActions({
            'add': 'driver/createDriver',
        }),

        handleDriver() {
            this.add(this.driver);
        },

        onFileChange(e) {
            const file =  e.target.files[0];
            this.driver.image = URL.createObjectURL(file);
        }
    }
}
</script>

<style scoped>
.btn-file {
    position: relative;
    overflow: hidden;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
}

.img-profile {
    height: auto;
}
</style>