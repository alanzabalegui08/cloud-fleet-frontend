<template>
    <div class="row">
        <div class="col-md-12">
            <router-link class="title-form-klay" style="color:#2196f3;"  to="/supervisor">/ Supervisor / Nuevo supervisor </router-link>
        </div>        
        <div class="col-md-12">
            <div class="bgc-white p-10">
                <div class="mT-10">
                    <div class="form-row">
                        <div class="col-sm-12 col-md-12 col-md-6">
                            <div class="row">
                                <div class="form-group col-sm-6 col-md-6 col-md-6">
                                    <label for="inputName">Nombre</label>
                                    <ValidationProvider vid="name" name="Nombre" rules="required|alpha"
                                        v-slot="{ errors }">
                                        <input type="text" class="form-control" v-model="supervisor.name">
                                        <span style="color:red;">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group col-sm-6 col-md-6 col-md-6">
                                    <label for="inputName">Tipo de Usuario</label>
                                    <ValidationProvider vid="userType" name="Tipo de usuario" rules="required"
                                        v-slot="{ errors }">
                                        <select class="form-control" v-model="supervisor.userType">
                                            <option v-for="(userType, index) in selectUsertype" :key="index"
                                                :value="userType.id"> {{userType.name}} </option>
                                        </select>
                                        <span style="color:red;">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group col-sm-6 col-md-6 col-md-6">
                                    <label for="inputName">Cliente</label>
                                    <ValidationProvider vid="customer" name="Cliente" rules="required"
                                        v-slot="{ errors }">
                                        <input type="text" class="form-control" v-model="supervisor.customer">
                                        <span style="color:red;">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group col-sm-6 col-md-6 col-md-6">
                                    <label for="inputName">Teléfono</label>
                                    <ValidationProvider vid="phone" name="Teléfono" rules="required"
                                        v-slot="{ errors }">
                                        <input type="text" class="form-control" v-model="supervisor.phone">
                                        <span style="color:red;">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group col-sm-6 col-md-6 col-md-6">
                                    <label for="inputName">Usuario APP</label>
                                    <ValidationProvider vid="userApp" name="Usuario App" rules="required"
                                        v-slot="{ errors }">
                                        <input type="text" class="form-control" v-model="supervisor.userApp">
                                        <span style="color:red;">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group col-sm-6 col-md-6 col-md-6">
                                    <label for="inputName">Contraseña</label>
                                    <ValidationProvider vid="password" name="Contraseña" rules="required"
                                        v-slot="{ errors }">
                                        <input type="password" class="form-control" v-model="supervisor.clave">
                                        <span style="color:red;">{{ errors[0] }}</span>
                                    </ValidationProvider>
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
import { supervisorModel } from "../util/model";
import { SELECT_USER_TYPE } from "../util/selectvalue";
import { mapActions } from 'vuex';
export default {
  name : 'form-supervisor',
  components : {
  },
  data () {
    return {
        supervisor : supervisorModel(),
        selectUsertype : SELECT_USER_TYPE,
    }
  },
  created (){
      //this.$parent.$on('create',this.handClient)
  },
  computed : {

  },
  methods : {
      ...mapActions({
          'add' : 'supervisor/createSupervisor'
      }),

      handleSupervisor() {
          this.add(this.supervisor);
      }
  }
}
</script>