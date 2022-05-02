import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
  path: '/',
  name: 'Home',
  component: () => import('./components/Log.vue'),
},
{
  path: "/login",
  name: "Login",
  component: () => import('./views/Login.vue'),
},
{
  path: "/Register",
  name: "Register",
  component: () => import('./views/Register.vue'),
},
{
  path: "/WineList",
  name: "WineList",
  component: () => import('./views/WineList.vue'),
},
{
  path:'/alcool/:id',
  name:'Alcool',
  component: () => import('./components/Catalog/AlcoolUnique.vue'),
},
{
  path: "/vin/:id",
  name: "Vin",
  component: () => import('./components/Catalog/Unique.vue/'),
},
{
  path: "/Admin",
  name: "Admin",
  component: () => import('./views/Admin.vue'),
},
{
  path: "/update/:id",
  name: "Update",
  component: () => import('./components/AdminWines/Update.vue'),
},
{
  path: "/:catchAll(.*)",
  name: "NotFound",
  component: () => import('./components/Admin/NotFound.vue'),
},
{
  path: "/updateUser/:id",
  name: "UpdateUser",
  component: () => import('./components/AdminUsers/UpdateUser.vue'),
},
{
  path: "/updateAlcool/:id",
  name: "UpdateAlcool",
  component: () => import('./components/AdminWines/UpdateAlcool.vue'),
},
{
  path: "/updateOrder/:id",
  name: "updateOrder",
  component: () => import('./views/NewOrder.vue'),
},
{
  path: "/password-reset/:id/:_id",
  name: "password-reset",
  component: () => import('./components/Utils/Reset.vue'),
},

];

export default createRouter({
  history: createWebHistory(),
  routes,
});