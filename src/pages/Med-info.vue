<template>
    <q-page class="bg-grey-3">
        <div class="q-pa-md">
          
            <q-expansion-item expand-separator icon="info" default-opened   header-class="bg-blue text-h6" dark :label="'Информация о лекарстве ' + getMedicines.title">

             <q-list bordered separator dense class="bg-white shadow-1">
               <q-item v-ripple>
                 <q-item-section>
                     <q-item-label class="text-h6 text-blue-9">Название лекарства : <span class="text-subtitle1 text-black">&nbsp;{{getMedicines.title}}</span></q-item-label>
                 </q-item-section>
               </q-item>
               <q-item v-ripple >
                 <q-item-section>
                   <q-item-label class="text-h6 text-blue-9">Описание: <span class="text-subtitle1 text-black">&nbsp;{{getMedicines.description}}</span></q-item-label>
                 </q-item-section>
               </q-item>
               <q-item v-ripple >
                 <q-item-section>
                   <q-item-label class="text-h6 text-blue-9">Штрих-код: <span class="text-subtitle1 text-black">&nbsp;{{getMedicines.barcode}}</span></q-item-label>
                 </q-item-section>
               </q-item>
               <q-item v-ripple >
                 <q-item-section>
                   <q-item-label class="text-h6 text-blue-9">Страна: <span class="text-subtitle1 text-black">&nbsp;{{getMedicines.country}}</span></q-item-label>
                 </q-item-section>
               </q-item>
               <q-item v-ripple >
                 <q-item-section>
                   <q-item-label class="text-h6 text-blue-9">Производитель: <span class="text-subtitle1 text-black">&nbsp;{{getMedicines.manufacture}}</span></q-item-label>
                 </q-item-section>
               </q-item>
               <q-item v-ripple >
                 <q-item-section>
                   <q-item-label class="text-h6 text-blue-9">Серийный номер: <span class="text-subtitle1 text-black">&nbsp;{{getMedicines.serial_code}}</span></q-item-label>
                 </q-item-section>
               </q-item>
               <q-item v-ripple >
                 <q-item-section>
                   <q-item-label class="text-h6 text-blue-9">НДС: <span class="text-subtitle1 text-black">&nbsp;{{getMedicines.vat}}%</span></q-item-label>
                 </q-item-section>
               </q-item>
               <q-item v-ripple >
                 <q-item-section>
                   <q-item-label class="text-h6 text-blue-9">Общее количество в бизнесе: <span class="text-subtitle1 text-black">&nbsp;{{getMedicines.total_quantity}}</span></q-item-label>
                 </q-item-section>
               </q-item>
               <q-item v-ripple >
                 <q-item-section>
                   <q-item-label class="text-h6 text-blue-9">Оставшееся количество в бизнесе: <span class="text-subtitle1 text-black">{{getMedicines.left_quantity}}</span></q-item-label>
                 </q-item-section>
               </q-item>
                
             </q-list>
      </q-expansion-item>

                   <!-- {{getMedicines}} -->
            <div class="q-mt-md">
              <q-btn push color="white" text-color="blue" icon="fas fa-arrow-left" 
              class="q-mb-xs q-mr-xs" to="/medicines"/>
              <q-btn push color="white" text-color="primary" label="Добавить" class="q-mb-xs" :disable="loading"
               :to="{ name: 'add-info-medicine', params: {id: id}}"/>
            </div>
            <!-- {{getBranches}} -->

            <div class="q-mt-xs">
                <q-table
                dense
                :data="data"
                :columns="columns"
                row-key="index"  
                :filter="filter"
                :loading="loading"
                separator="cell"
                :pagination.sync="pagination"
                :rows-per-page-options="[0]"
                :pagination-label="(firstRowIndex, endRowIndex, totalRowsNumber) => firstRowIndex + '-' + endRowIndex + ' из ' + rowsNumber"

                >
                <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                        <q-btn dense round flat color="grey" @click="(addRow = !addRow) && (temp = props.row)" icon="add_circle"></q-btn>
                        <q-btn dense round flat color="grey" icon="edit"></q-btn>
                        <q-btn dense round flat color="grey" icon="fas fa-info-circle"></q-btn>
                    </q-td>
                </template>
                <template v-slot:top="props">
                    <span class="text-h6">Товары с разной наценкой</span>
                    <q-space />
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
            <!-- {{getMedicinesInfo}} -->

            <div class="q-mt-md">
                <q-table
                dense
                :data="data2"
                :columns="columns2"
                row-key="index"  
                :filter="filter"
                :loading="loading2"
                separator="cell"
                :pagination.sync="pagination2"
                :rows-per-page-options="[0]"
                :pagination-label="(firstRowIndex, endRowIndex, totalRowsNumber) => firstRowIndex + '-' + endRowIndex + ' из ' + totalRowsNumber"
                >
                <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                        <q-btn dense round flat color="grey" icon="edit"></q-btn>
                        <q-btn dense round flat color="grey" icon="fas fa-info-circle"></q-btn>
                    </q-td>
                </template>
                <template v-slot:top="props">
                    <span class="text-h6">Лекарства в филиалах</span>
                    <q-space />
                    <q-btn flat round dense icon="fas fa-sync-alt" :color="rColor2" size="sm" @click="refresh2"></q-btn>
                    <q-btn
                    flat round dense
                    :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                    @click="props.toggleFullscreen"
                    class="q-ml-sm"
                    />
                </template>
                </q-table>
            </div>

          <!-- {{getBranchesInMedInfoPage}} -->

        </div>



        <q-dialog v-model="addRow" persistent >
       
             <q-card style="min-width: 50vw;">
               
               <q-card-section class="bg-info">
                 <div class="text-h6 text-white">Добавить в корзину</div>
               </q-card-section>
               <q-separator />
                <q-form
                  @submit="addToCart"
                  @reset="onReset"
                  class="q-pt-md"
                >
               <q-card-section class="q-pt-none">
                 <div class="row">
                  <q-select outlined v-model="distribution_branch" :options="distribution_options" label="Филиал" class="q-my-md col-12"
                  />
                  <!-- :rules="[
                    val => val != '' || 'Филиал не выбран'
                  ]" -->
                 </div>
                 <div class="row q-mb-xs content-stretch">
                  <q-input outlined v-model="distribution_amount.box" label="Кол-во упаковок" class="col" :suffix="String(left_quantity_box)" 
                  :rules="[
                    val => val >= 0 && val <= left_quantity_box || 'В складе имеется ' + left_quantity_box + ' упаковок'
                  ]"/>
                  <q-input outlined v-model="distribution_amount.piece" label="Кол-во штук" class="q-pl-md col" :suffix="String(left_quantity_piece)" 
                  v-if="temp.capacity > 1" 
                  :rules="[
                    val => val >= 0 && val <= left_quantity_piece || 'В складе имеется ' + left_quantity_piece + ' штук'
                  ]"/>
                 </div>
            </q-card-section>
                
               <q-card-actions align="right" class="bg-white text-white">
                   <q-btn class="bg-info" label="Отменить" type="reset" v-close-popup />
                   <q-btn class="bg-info" label="Добавить" type="submit" :disable="distribution_branch == ''"/>
               </q-card-actions>
              
            </q-form>
          </q-card>

        </q-dialog>
        <!-- {{getMedicinesInfo}} -->
    </q-page>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    props:{
      id: {
        required: true
      },
    },
    data(){
        return{
            rColor: 'grey',
            rColor2: 'grey',
            rowsNumber: null,
            temp: {},
            left_quantity_box: null,
            left_quantity_piece: null,
            addRow: false,
            distribution_amount: {box: '', piece: ''},
            distribution_branch: '',  
            distribution_options: [],

            getMedicines: {title: '', barcode: '', country: '', manufacture: '', serial_code: '', vat: '', total_quantity: '', left_quantity: ''},
            pagination: {
              rowsPerPage: 8,
              page: 1,
              // sortBy: 'expire_date',
              // descending: true,
            },
            pagination2: {
              rowsPerPage: 8
            },
            loading: false,
            loading2: false,
            filter: '',
            columns: [
                { name: 'index', align: 'center', label: '№', field: 'index', sortable: true},
                { name: 'expire_date', align: 'center', label: 'Годен до', field: 'expire_date', sortable: true },
                { name: 'total_quantity', align: 'center', label: 'Общее кол-во', field: 'total_quantity', sortable: true },
                { name: 'left_quantity', align: 'center', label: 'Остаток', field: 'left_quantity', sortable: true },
                { name: 'purchase_price', align: 'center', label: 'Цена покупки', field: 'purchase_price', sortable: true },
                { name: 'selling_price', align: 'center', label: 'Цена продажи', field: 'selling_price', sortable: true },
                { name: 'actions', label: 'Действия', field: '', align:'center' },
            ],
            columns2: [
                { name: 'index', align: 'center', label: '№', field: 'index', sortable: true},
                { name: 'name', align: 'center', label: 'Имя', field: 'name', sortable: true },
                { name: 'address', align: 'center', label: 'Адрес', field: 'address', sortable: true },
                { name: 'city', align: 'center', label: 'Город', field: 'city', sortable: true },
                { name: 'contact_person', align: 'center', label: 'Контактное лицо', field: 'contact_person', sortable: true },
                { name: 'contact_phone', align: 'center', label: 'Контактный телефон', field: 'contact_phone', sortable: true },
                { name: 'status', align: 'center', label: 'Статус', field: 'status', sortable: true },
                { name: 'street', align: 'center', label: 'Улица', field: 'street', sortable: true },
                { name: 'total_quantity', align: 'center', label: 'Кол-во', field: 'total_quantity', sortable: true },
                { name: 'actions', label: 'Действия', field: '', align:'center' },
            ],
            data: [],  
            data2: [],
        }
    },
    watch:{ 
      'pagination.page': async function (newVal, oldVal) {
        if (newVal == this.pagesNumber) {
          await this.GET_NEXT_PAGE_FOR_MEDICINE_INFO();
        }
      },
      'distribution_amount.box': function (newVal, oldVal){
         if(newVal < this.left_quantity_box){
           this.left_quantity_piece = Number(this.temp.capacity);
         }else if (newVal == this.left_quantity_box){
           this.left_quantity_piece = Number(this.temp.left_quantity_piece);
         }
      },
      'temp.left_quantity_box': function (newVal, oldVal){
        this.left_quantity_box = Number(this.temp.left_quantity_box);
      },
      'temp.left_quantity_piece': function (newVal, oldVal){
        this.left_quantity_piece = Number(this.temp.left_quantity_piece);
      },
      addRow: function (newVal, oldVal){
        if(newVal == true){
          if(this.temp.capacity <= 1){
            Object.assign(this.distribution_amount, {piece: 0});
          }
        }
      },
    },
    async mounted(){
      const details = await this.GET_MEDICINE_DETAIL({id: this.id});
      Object.assign(this.getMedicines, {title: details.title, description: details.description, barcode: details.barcode,
       country: details.country, manufacture: details.manufacture, serial_code: details.serial_code,vat: details.vat,
        total_quantity: details.total_quantity, left_quantity: details.left_quantity});

      await this.refresh();
      
      await this.refresh2();


      await this.GET_BRANCHES();
      this.distribution_options = await this.getBranchNames;
    },
    computed:{
      ...mapGetters([
        'getBranches', 'getMedicinesInfo', 'getBranchesInMedInfoPage'
      ]),
      getBranchNames() {
        let a = [];
        for(let i = 0; i<this.getBranches.length; i++){
          a.push(this.getBranches[i].name);
        }
        return a;
      },
      pagesNumber () {
        return Math.ceil(this.data.length / this.pagination.rowsPerPage)
      },
    },
    methods: {
      ...mapActions([
          'GET_MEDICINE_DETAIL', 'GET_MEDICINE_INFO', 'GET_BRANCHES', 'GET_BRANCHES_IN_MED_INFO_PAGE', 'ADD_TO_CART',
          'GET_NEXT_PAGE_FOR_MEDICINE_INFO'
      ]),
      async refresh(){
        this.rColor = 'blue';
        this.loading = true;
        await this.GET_MEDICINE_INFO({id: this.id});
        this.rowsNumber = await this.getMedicinesInfo.count;
        this.data = await this.getMedicinesInfo.results;
        this.pagination.page = 1;
        this.loading = false;
        this.rColor = 'grey';
      },
      async refresh2(){
        this.rColor2 = 'blue';
        this.loading2 = true;
        await this.GET_BRANCHES_IN_MED_INFO_PAGE({id: this.id});
        this.data2 = await this.getBranchesInMedInfoPage;
        this.loading2 = false;
        this.rColor2 = 'grey';
      },
      async addToCart(){
          await this.$emit('medicines', true);
      
          const branch_id = this.getBranches.filter(el => el.name == this.distribution_branch);
          if(this.distribution_amount.piece == ''){
            this.distribution_amount.piece = 0;
          }
          if(this.distribution_amount.box == ''){
            this.distribution_amount.box = 0;
          }
          await this.ADD_TO_CART({
            business_medicine_info_id: this.temp.business_medicine_info_id,
            quantity_box: this.distribution_amount.box,
            quantity_piece: this.distribution_amount.piece,
            branch_id: branch_id[0].id,
          });
          this.$q.notify({
            icon: 'done',
            color: 'positive',
            message: 'Успешно отправлено в корзину!'
          })
          
          this.addRow = false;
          await this.onReset();

          await this.refresh();
      },
      onReset () {
        this.distribution_branch = '';
        this.distribution_amount = {box: '', piece: ''};
      }
    }
}
</script>

<style scoped>

</style>