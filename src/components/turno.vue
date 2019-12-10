<template>
        <div class="mT-30">
            <form>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputName">Nombre</label>
                        <input type="text" class="form-control" id="name_client">
                    </div>
                    <div class="form-group col-md-4">
                        <label>Entrada</label>
                        <select class="form-control" id="color_client">
                            <option value="greeb">12:00 AM</option>
                            <option value="greeb">01:00 AM</option>
                            <option value="greeb">02:00 AM</option>
                            <option value="greeb">03:00 AM</option>
                            <option value="greeb">04:00 AM</option>
                            <option value="greeb">05:00 AM</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label>Salida</label>
                        <select class="form-control" id="color_down">
                            <option value="greeb">12:00 PM</option>
                            <option value="greeb">01:00 PM</option>
                            <option value="greeb">02:00 PM</option>
                            <option value="greeb">03:00 PM</option>
                            <option value="greeb">04:00 PM</option>
                            <option value="greeb">05:00 PM</option>
                        </select>
                    </div>
                </div>
            </form>
            <table id="table_turn" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Nombre Turno</th>
                        <th>Entrada</th>
                        <th>Salida</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Matutino</td>
                        <td>9:00 AM</td>
                        <td>7:00 PM</td>
                    </tr>
                </tbody>
            </table>            
        </div>
</template>

<script>
export default {
  name : 'turno',
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