<template>
    <q-page class="bg-grey-3">
        <div class="q-pa-md">
            <div class="row q-mb-xs">
              <q-btn push color="white" text-color="primary" label="Добавить" 
              class="q-mb-xs" :disable="loading" @click="addMedicinePopUp = !addMedicinePopUp"/>
              <q-space/>
            </div>
            <q-table
            dense
            title=""
            :data="data"
            :columns="columns"
            row-key="index"  
            :filter="filter"
            :loading="loading"
            separator="cell"
            :pagination.sync="pagination"
            :rows-per-page-options="[3]"
            :pagination-label="(firstRowIndex, endRowIndex, totalRowsNumber) => firstRowIndex + '-' + endRowIndex + ' из ' + rowsNumber"
            >
            <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                    <q-btn dense round flat color="grey" icon="edit"></q-btn>
                    <q-btn dense round flat color="grey" :to="{ name: 'med-info', params: {id: props.row.id}}" icon="fas fa-info-circle"></q-btn>
                    <q-btn dense round flat color="grey" icon="delete"></q-btn>
                </q-td>
            </template>
            <template v-slot:top="props">
                <span class="text-subtitle1">Все лекарства</span>
                <q-space />
                <form @submit.prevent="getSearchResultByFilter"  class="row">
                  <q-input square borderless dense debounce="500" color="primary" v-model="filter"  
                  placeholder="Искать" style="border: 1px solid silver; padding: 0px 5px; min-width: 20vw;">
                   
                  </q-input>
                  <q-btn flat square color="white" :class="scan ? 'bg-green' : 'bg-blue'" style="border-radius: 0px;" type="submit">
                    <q-icon name="search" />  
                  </q-btn>
                </form>
                <q-toggle
                  v-model="scan"
                  icon="fas fa-barcode"
                  color="green"
                />
                <q-btn flat round dense icon="fas fa-sync-alt" :color="rColor" size="sm" @click="refresh"></q-btn>
                <q-btn
                flat round dense
                :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="props.toggleFullscreen"
                class="q-ml-sm"
                />
            </template>
            </q-table>
        </div>


           <q-dialog v-model="deleteRowVar">
             <q-card>
               <q-card-section class="bg-warning">
                 <div class="text-h6 text-white">Удаление</div>
               </q-card-section>
               <q-separator />
               <q-card-section class="q-pt-none q-pa-lg">
                 - Вы уверены, что хотите удалить лекарство?
               </q-card-section>
               <q-separator />
               <q-card-actions align="right" class="bg-white text-teal">
                 <q-btn flat label="Нет" v-close-popup />
                 <q-btn flat label="Да" v-close-popup  />
               </q-card-actions>
             </q-card>
           </q-dialog>

           <q-dialog v-model="addMedicinePopUp" full-width full-height persistent>
             <addMedicines />
           </q-dialog>

           <!-- {{getMedicines}} -->
         
    </q-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import addMedicines from './Add-medicines'

export default {
    components:{
      'addMedicines': addMedicines
    },
    data(){
      return {
        rColor: 'grey',
        scan: false,
        pagination: {
          rowsPerPage: 9,
          page: 1,
        },
        rowsNumber: null,
        row: { index: '', products: '', barcode: '', total_quantity: '', left_quantity: '', vat: '' },
        addMedicinePopUp: false,
        editRowVar: false,
        deleteRowVar: false,
        rowDelete: {},
        loading: false,
        filter: '',
        columns: [
          { name: 'index', align: 'center', label: 'No#', field: 'index', sortable: true},
          { name: 'products', align: 'center', label: 'Лекарство', field: 'title', sortable: true },
          { name: 'barcode', align: 'center', label: 'Штрих-код', field: 'barcode', sortable: true },
          { name: 'country', align: 'center', label: 'Страна', field: 'country', sortable: true },
          { name: 'manufacture', align: 'center', label: 'Производитель', field: 'manufacture', sortable: true },
          { name: 'serial_code', align: 'center', label: 'Серийный номер', field: 'serial_code', sortable: true },
          { name: 'total_quantity', align: 'center', label: 'Кол-во', field: 'total_quantity', sortable: true },
          { name: 'left_quantity', align: 'center', label: 'Остаток', field: 'left_quantity', sortable: true },
          { name: 'vat', align: 'center', label: 'НДС', field: 'vat', sortable: true },
          { name: 'sold_quantity', align: 'center', label: 'Продажи за 30 дней', field: 'sold_quantity', sortable: true },
          { name: 'actions', label: 'Действия', field: '', align:'center' },
        ],
        data: [],
      }
    },
    watch: {
      'pagination.page': async function (newVal, oldVal) {
        if (newVal == this.pagesNumber) {
          await this.GET_NEXT_PAGE();
        }
      },
      filter: async function (newVal, oldVal) {
        if (this.scan == false) {
          if (newVal.length >= 2) {
            await this.getSearchResultByFilter();
          } else {
            console.log('Search input has less than 2 characters')
          }
        }
      },
    },
    async mounted(){
      await this.refresh();
    },
    computed:{
      ...mapGetters([
        'getMedicines', 'getSearchResult'
      ]),
      pagesNumber () {
        return Math.ceil(this.data.length / this.pagination.rowsPerPage)
      },
      
    },
    methods: {
      ...mapActions([
        'GET_MEDICINES', 'GET_NEXT_PAGE', 'GET_SEARCH_RESULT_ALL_MEDICINES'
      ]),
      async refresh(){
        this.rColor = 'blue';
        this.loading = true;
        await this.GET_MEDICINES();
        this.rowsNumber = await this.getMedicines.count;
        this.data = await this.getMedicines.results;
        this.pagination.page = 1;
        this.loading = false;
        this.rColor = 'grey';
      },
      async getSearchResultByFilter(){
         let a = await this.GET_SEARCH_RESULT_ALL_MEDICINES(
          {
            value: this.filter,
          }
        )
      },
      deleteRow(props){
        this.rowDelete = props.row
        this.deleteRowVar = !this.deleteRowVar
      },
      editRow(props) {
        this.row = props.row
        this.editRowVar = !this.editRowVar
      },

     

    }
}
</script>

<style scoped>

</style>