const routes = [
  {
    path: '/',
    component: () => import('pages/Login-1.vue'),
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // {path: '', component: () => import('pages/Dashboard.vue'), beforeEnter: AuthGuard},
      {path: '/', component: () => import('pages/Dashboard.vue'), meta: {authRequired: true}},
      {path: '/branches', name: 'branches', component: () => import('pages/Branches.vue'), meta: {authRequired: true}},
      {path: '/medicines', component: () => import('pages/Medicines.vue'), meta: {authRequired: true}},
      {path: '/history', component: () => import('pages/History.vue'), meta: {authRequired: true}},
      {path: '/history-info/:id', name: 'history-info', component: () => import('pages/History-info.vue'), props: true, meta: {authRequired: true}},
      {path: '/return-branches', component: () => import('pages/Return-branches.vue'), meta: {authRequired: true}},
      {path: '/return/:id', name: 'return', component: () => import('pages/Return.vue'), props: true, meta: {authRequired: true}},
      {path: '/med-info/:id', name: 'med-info', component: () => import('pages/Med-info.vue'), props:true, meta: {authRequired: true}},
      {path: '/branch-info/:id', name: 'branch-info', component: () => import('pages/Branch-info.vue'), props: true, meta: {authRequired: true}},
      {path: '/branch-info-detail/:branch_id/:business_medicine_id', name: 'branch-info-detail', component: () => import('pages/Branch-info-detail.vue'), props: true, meta: {authRequired: true}},
      {path: '/branch-update/:id', name: 'branch-update', component: () => import('pages/Branch-update.vue'), props: true, meta: {authRequired: true}},
      // {path: '/add-medicine', component: () => import('pages/Add-medicine.vue'), meta: {authRequired: true}},
      {path: '/add-info-medicine/:id', name: 'add-info-medicine', component: () => import('pages/Add-info-medicine.vue'), props: true, meta: {authRequired: true}},
      {path: '/edit-product/:id', name: 'edit-product', component: () => import('pages/Edit-product.vue'), props:true, meta: {authRequired: true}},
      {path: '/shopping-cart', component: () => import('pages/ShoppingCart.vue'), meta: {authRequired: true}},
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes







// function AuthGuard(from, to, next){
//   if(store.getters.getUser){
//     next()
//   }
//   else
//     next('/')
// }


    
