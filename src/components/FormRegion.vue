<template>
    <div class="row">
        <div class="masonry-item col-md-12">
            <div class="bgc-white p-20 bd">
                <div class="mT-10">
                    <div class="form-row">
                        <div class="col-md-5">
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="inputName">Nombre</label>
                                    <ValidationProvider vid="name" name="Nombre" rules="required|alpha"
                                        v-slot="{ errors }">
                                        <input type="text" class="form-control" id="" v-model="region.name"
                                            placeholder="">
                                        <span style="color:red;">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { regionModel } from "../util/model";
export default {
  name : 'form-region',
  components : {
  },
  data () {
    return {
        region : regionModel (),
    }
  },
  created (){
      //this.$parent.$on('create',this.handClient)
      this.$parent.$watch().name
  },
  computed : {

  },
  methods : {
  }
}
</script>