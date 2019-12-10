<template id="component-modal">
  <div class="modal fade" id="componentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="componentModalLabel">INFORMACIÓN GENERAL</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form-client></form-client>
        </div>
        <div class="modal-footer">
          <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal"></button> -->
          <button type="button" class="btn btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormClient from './FormClient';
export default {
  name : 'modal',
  components: {
    FormClient
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