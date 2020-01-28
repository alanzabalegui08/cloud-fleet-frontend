<template>
  <div>
    <TableView
      :headers="columns"
      :rows="list"
      :sort="sort2"
      :pagination="pagination"
      css-style="custom-style"      
    >
      
      <template v-slot:no-data>
        <span>No data</span>
      </template>
    </TableView>
    <TFooter></TFooter>
  </div>
</template>
<script>
import {
    columns,
    rows
} from './data'
import TableView from '@/components/TableView';
import TFooter from '@/components/TFooter';
export default {
    name: 'TableAdapter',
    props: {
        list: {
            type: Array
        },
        columns: {
            type: Array
        },
    },
    components: {
        TableView,
        TFooter
    },
    data() {
        return {
            columns_: columns,
            items: rows,
            sort1: {
                field: 'first_name',
                order: 'asc'
            },
            sort2: {
                field: 'email',
                order: 'asc'
            },
            pagination: {
                itemsPerPage: 7,
                align: 'center',
                visualStyle: 'select'
            }
        }
    }
}
</script>
<style lang="scss">
body, html{
  height: 100%;
}
#app {
  font-family: 'Roboto Mono', Helvetica, Arial, sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 90%;
  margin: 0 auto;
}
h1{
  margin-bottom: 2em;
  color: #f90;
}
.separator{
  margin: 2em 0;
  text-align: center;
}
.custom-style {
  // Table styles
  .ozn-table {
    border-collapse: collapse;
    width: 100%;
    thead {
      th { 
        border-bottom: 1px solid #ffffff;
        padding: 0 10px;
        height: 48px;
        text-align: left; 
        font-size: 1em; 
        color: #fff;
        background-color: #73787b; 
        cursor: pointer; 
        &:hover{
          span{
            text-decoration: underline;
            text-decoration-style: dotted;
          }
        }        
        i{
          color: #ffffff; 
          &.active{
            color: #ffffff;
            + span{
              color: #ffffff;
            }
          }
        }       
      }
    }
    tbody {
      tr{
        &:nth-child(odd){
          background-color: #ffffff;
        }
        &:nth-child(even){
          background-color: #ffffff;
        }
      }
      td {
        border-bottom: 1px solid #ffffff;
        padding: 0 10px;
        height: 48px;
        font-size: 1em; 
      }
    }
  }
  // Paginator styles    
  .ozn-paginator{
    margin-top: .5em;
    select{
      border: 1px solid #7cc3fd;
      border-radius: 8px;
      color: #ffffff;
      background-color:  #7cc3fd;
      outline: none;
    }
    button{
      border: 1px solid #7cc3fd;
      border-radius: 8px;
      color: #ffffff;
      background-color:  #7cc3fd;
      outline: none;
    }    
  }
}
</style>