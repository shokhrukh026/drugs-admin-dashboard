<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-green">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" aria-label="Menu" />

        <q-toolbar-title>
          <router-link class="cursor-pointer" to="/main" tag="div">
            UzPos Аналитика
          </router-link>
        </q-toolbar-title>


        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <!-- Notification -->
          <!-- <q-btn round dense flat color="white" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              5
            </q-badge>
            <q-menu>
              <q-list style="min-width: 100px">


                
                <q-card class="text-center no-shadow no-border">
                  <q-btn label="View All" style="max-width: 120px !important;" flat dense class="text-indigo-8"></q-btn>
                </q-card>
              </q-list>
            </q-menu>
            <q-tooltip>Уведомление</q-tooltip>
          </q-btn> -->


          <q-btn round flat to="/shopping-cart">
            <q-icon name="shopping_cart"></q-icon>
            <q-badge color="red" floating v-if="cart > 0">{{cart}}</q-badge>
             <q-tooltip>Корзина</q-tooltip>
          </q-btn>
          


          <q-btn round flat>
            <q-avatar size="26px">
              <q-icon name="fas fa-user-circle"></q-icon>
            </q-avatar>

            <q-menu transition-show="jump-down" transition-hide="jump-up">
              <q-list style="min-width: 100px">
                <q-item clickable to="/branches">
                  <q-item-section>Филиалы</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>
                    <q-btn color="blue" label="Выход" push size="sm" v-close-popup to="/" @click="logout" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
            <q-tooltip>Пользователь</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-green text-white column">
      <q-list>
        <router-link class="q-pa-sm cursor-pointer" to="/main" tag="div">
          <q-img  :src="require('../statics/Uzpos_logo_rectangle.png')"></q-img>
        </router-link>
       
        <q-item :to="bar.url" active-class="q-item-no-link-highlighting" v-for="(bar,item) in sideBar" :key="item">
          <q-item-section avatar>
            <q-icon :name="bar.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{bar.title}}</q-item-label>
          </q-item-section>
        </q-item>


      </q-list>
      <q-space/>
      <q-list>
        <q-item>
          <q-item-section>
            Version: 1.0.0
          </q-item-section>
        </q-item>
      </q-list>
      
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view @medicines="distributeMedicines"/> 
      <!-- @medicines="distributeMedicines" :medicine="shopping_cart" -->
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  meta () {
      return {
        title: 'UzPos Pharmacy'
      }
  },
  data() {
    return {
      cart: '0',
      leftDrawerOpen: false,
      sideBar: [
        {title: 'Главная', icon: 'dashboard', url: '/main'},
        {title: 'Филиалы', icon: 'fas fa-building', url: '/branches'},
        {title: 'Лекарства', icon: 'fas fa-box-open', url: '/medicines'},
        {title: 'Возврат', icon: 'fas fa-exchange-alt', url: '/return-branches'},
        {title: 'История', icon: 'fas fa-history', url: '/history'},
      ]

    }
  },
  watch: {

  },
  async mounted(){
    await this.GET_SHOPPING_CART_MEDICINES();
    this.cart = this.getShoppingCartMedicines.length;
  },
  computed:{
    ...mapGetters([
      'getShoppingCartMedicines'
    ])
  },
  methods: {
    ...mapActions([
      'GET_SHOPPING_CART_MEDICINES'
    ]),
    //clears Session
    async logout(){
      await this.$store.dispatch('LOGOUT');
    },
    async distributeMedicines(value){
      if(value == true){
        this.cart++;
      }else if(value == false){
        this.cart--;
      }else if(value == 'distribute_all'){
        this.cart = 0;
      }
    }

  }
}
</script>
