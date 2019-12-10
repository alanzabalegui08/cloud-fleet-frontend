<template>
<div class="masonry-item col-md-12">
    <div class="bgc-white p-20 bd">
        <div class="mT-10">
            <form>
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="inputName">Nombre</label>
                        <input type="text" class="form-control" id="name_client" placeholder="Nombre completo">
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputPassword">Contraseña</label>
                        <input type="password" class="form-control" id="password_client" placeholder="Contraseña">
                    </div>
                    <div class="form-group col-md-6">
                        <label>Color texto</label>
                        <select class="form-control" id="color_client">
                            <option value="greeb">GREEN</option>
                            <option value="greeb">YELLOW</option>
                            <option value="greeb">BLUE</option>
                            <option value="greeb">ORANGE</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Color Fondo</label>
                        <select class="form-control" id="color_down">
                            <option value="greeb">GREEN</option>
                            <option value="greeb">YELLOW</option>
                            <option value="greeb">BLUE</option>
                            <option value="greeb">ORANGE</option>
                        </select>
                    </div>
                </div>
                <turno></turno>
                <!-- <button type="submit" class="btn btn-primary">Sign in</button>-->
            </form>
        </div>
    </div>
</div>
</template>

<script>
import turno from './turno';

export default {
  name : 'form-client',
  components : {
      turno,
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