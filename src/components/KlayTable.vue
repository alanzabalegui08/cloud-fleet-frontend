<template>
    <div id="app" class="">
        <vuetable ref="vuetable" :api-mode="false" :fields="fields" :per-page="perPage" :data-manager="dataManager"
            pagination-path="pagination" @vuetable:pagination-data="onPaginationData">
            <div slot="actions" slot-scope="props">
                <button class="btn cur-p btn-outline-danger mr-3" @click="onActionClicked('view-item', props.rowData)">
                    <i class="fa fa-trash-o"></i>
                </button>
                <button class="btn cur-p btn-outline-success mr-3" @click="onActionClicked('edit-item', props.rowData)">
                    <i class="fa fa-location-arrow"></i>
                </button>
                <button class="btn cur-p btn-outline-primary mr-3" @click="onActionClicked('delete-item', props.rowData)">
                    <i class="fa fa-pencil"></i>
                </button>
            </div>
        </vuetable>
        <div style="padding-top:10px">
            <vuetable-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
        </div>
    </div>
</template>

<script>
import Vuetable from 'vuetable-2';
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import FieldsDef from '../util/FieldsDef.js';
import _ from "lodash";

export default {
    props : {
        list : {
            type : Array
        },
        columns : {
            type : Array
        },
    },    
  components: {
    Vuetable,
    VuetablePagination
  },
    data() {
    return {
      fields: FieldsDef,
      perPage: 2,
      data: []
    };
  },
  watch: {
    data(newVal, oldVal) {
        console.log(oldVal);
        
      this.$refs.vuetable.refresh();
    }
  },

  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    dataManager(sortOrder, pagination) {
      if (this.list.length < 1) return;

      let local = this.list;
      if (sortOrder.length > 0) {
        console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
        local = _.orderBy(
          local,
          sortOrder[0].sortField,
          sortOrder[0].direction
        );
      }      
      pagination = this.$refs.vuetable.makePagination(
        local.length,
        this.perPage
      );
      console.log('pagination:', pagination)
      let from = pagination.from - 1;
      let to = from + this.perPage;

      return {
        pagination: pagination,
        data: _.slice(local, from, to)
      };
    },
    onActionClicked(action, data) {
      console.log("slot actions: on-click", data.name);
    }
  }
};
</script>