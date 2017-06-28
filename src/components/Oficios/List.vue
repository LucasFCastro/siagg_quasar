<template>
  <div>
    <h4>Oficios</h4>
    <q-data-table
      :data="oficios"
      :columns="columns"
      :config="config"
    >
      <!-- <template slot="col-user" scope="cell">
        <span>{{cell.row.user.name}}</span>
      </template> -->
      <!-- <template slot="col-data_envio" scope="cell">
        <span>{{cell.row.data_envio | moment}}</span>
      </template> -->
      <template slot="selection" scope="selection">
        <button class="primary clear" @click="changeMessage(selection)">
          <i>edit</i>
        </button>
        <button class="primary clear" @click="deleteRow(selection)">
          <i>delete</i>
        </button>
      </template>
    </q-data-table>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      columns: [
        {
          label: 'Nº Ofício',
          field: 'numero_oficio',
          width: '30px',
          filter: true,
          sort: true
        },
        {
          label: 'Destinatário',
          field: 'destinatario',
          width: '100px',
          filter: true,
          sort: true
        },
        {
          label: 'Assunto',
          field: 'assunto',
          width: '100px',
          filter: true,
          sort: true
        },
        {
          label: 'Data de Envio',
          field: 'data_envio',
          width: '30px',
          filter: true,
          sort: true
        },
        {
          label: 'Usuário',
          field: 'user',
          width: '100px',
          filter: true,
          sort: true
          // format (o) {
          //   return o.name
          // }
        }
      ],
      config: {
        // [REQUIRED] Set the row height
        rowHeight: '40px',
        // (optional) Title to display
        title: 'Lista de Ofícios',
        // (optional) No columns header
        // noHeader: true,
        // (optional) Display refresh button
        // refresh: true,
        // (optional)
        // User will be able to choose which columns
        // should be displayed
        columnPicker: true,
        // (optional) How many columns from the left are sticky
        // leftStickyColumns: 0,
        // (optional) How many columns from the right are sticky
        // rightStickyColumns: 2,
        // (optional)
        // Styling the body of the data table;
        // "minHeight", "maxHeight" or "height" are important
        bodyStyle: {
          maxHeight: '400px',
          minHeight: '400px'
        },
        // (optional) By default, Data Table is responsive,
        // but you can disable this by setting the property to "false"
        responsive: true,
        // (optional) Use pagination. Set how many rows per page
        // and also specify an additional optional parameter ("options")
        // which forces user to make a selection of how many rows per
        // page he wants from a specific list
        pagination: {
          rowsPerPage: 10,
          options: [5, 10, 25, 50, 100]
        },
        // (optional) User can make selections. When "single" is specified
        // then user will be able to select only one row at a time.
        // Otherwise use "multiple".
        selection: 'single',
        // (optional) Override default messages when no data is available
        // or the user filtering returned no results.
        messages: {
          noData: '<i>Aviso</i> Sem dados disponíveis para mostrar.',
          noDataAfterFiltering: '<i>Aviso</i> Sem resultados para este filtro.'
        },
        // (optional) Override default labels. Useful for I18n.
        labels: {
          columns: 'Colunas Visíveis',
          allCols: 'Todas as colunas',
          rows: 'Linhas',
          selected: {
            singular: 'item selecionado.',
            plural: 'itens selecionados.'
          },
          clear: 'limpar',
          search: 'Pesquisar',
          all: 'Todos'
        }
      }
    }
  },
  computed: {
    oficios () {
      let dados = this.$store.state.oficios.list.map((o) => {
        return {
          numero_oficio: o.id,
          destinatario: o.destinatario,
          assunto: o.assunto,
          data_envio: moment(o.data_envio).format('DD/MM/YYYY'),
          user: o.user.name
        }
      })
      return dados
    }
  },
  mounted () {
    this.$store.dispatch('oficiosList')
  }
}
</script>

<style>
</style>
