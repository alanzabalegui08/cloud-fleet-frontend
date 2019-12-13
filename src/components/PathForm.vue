<template>
    <div class="row">

        <div class="masonry-item col-md-4">
            <div class="bgc-white p-20 bd" >
                <div class="mT-10">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputName">Nombre Ruta</label>
                            <input type="text" class="form-control" id="name_client" v-model="client.name" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Cliente</label>
                            <input type="text" class="form-control" id="name_client" v-model="client.name" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Tolerancia</label>
                            <input type="text" class="form-control" id="name_client" v-model="client.name" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Kilometraje</label>
                            <input type="text" class="form-control" id="name_client" v-model="client.name" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Tipo Ruta</label>
                            <input type="text" class="form-control" id="name_client" v-model="client.name" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Precio Operador</label>
                            <input type="text" class="form-control" id="name_client" v-model="client.name" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">Precio Cliente</label>
                            <input type="text" class="form-control" id="name_client" v-model="client.name" placeholder="">
                        </div>                                                                                                                                                
                    </div>
                </div>
            </div>
        </div>
        <div class="masonry-item col-md-8">
            <div class="bgc-white p-20 bd" >
                <div class="mT-10">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputName">Url Ruta Entrada</label>
                            <input type="text" class="form-control"  placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputName">URL Ruta Salida</label>
                            <input type="text" class="form-control"  placeholder="">
                        </div>                                                                                                                                             
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputName">Nombre</label>
                            <input type="text" class="form-control" >
                        </div>
                        <div class="form-group col-md-2">
                            <label>Entrada</label>
                            <select class="form-control"  >
                                <option value="12:00">12:00 AM</option>
                                <option value="1:00">01:00 AM</option>
                                <option value="2:00">02:00 AM</option>
                                <option value="3:00">03:00 AM</option>
                                <option value="4:00">04:00 AM</option>
                                <option value="5:00">05:00 AM</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label>Salida</label>
                            <select class="form-control"  >
                                <option value="12:00">12:00 AM</option>
                                <option value="1:00">01:00 AM</option>
                                <option value="2:00">02:00 AM</option>
                                <option value="3:00">03:00 AM</option>
                                <option value="4:00">04:00 AM</option>
                                <option value="5:00">05:00 AM</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label>Sentido</label>
                            <select class="form-control" >
                                <option value="12:00">ENTRADA</option>
                                <option value="1:00">SALIDA</option>
                            </select>
                        </div> 
                        <div class="form-group col-md-2">
                            <label for="inputName">Codigo</label>
                            <input type="text" class="form-control" >
                        </div>                       
                        <div class="form-group col-md-1">
                            <button type="button" class="btn cur-p btn-outline-danger mr-3 position-absolute" ><i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <table id="table_turn" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Nombre Turno</th>
                        <th>Hora inicio </th>
                        <th>Hora fin</th>
                        <th>Sentido</th>
                        <th>Codigo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre</td>
                       <td>12:000 AM</td>
                       <td>3:00 PM</td>
                       <td>ENTRADA</td>
                       <td>COD200</td>
                       <td><button type="button" class="btn cur-p btn-outline-danger" ><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>        
    </div>
</template>

<script>
export default {
  name : 'form-path',
  components : {

  },
  data () {
    return {
        client : {
            name : '',
            password: '',
            text_color : '',
            backgroud_color : '',
        },
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