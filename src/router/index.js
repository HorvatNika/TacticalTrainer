import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Menu.vue')
  },
  { 
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  { 
    path: '/schedule',
    name: 'schedule',
    component: () => import('../views/Schedule.vue')
  },
  { 
    path: '/weaponsencyclopedia',
    name: 'weaponsencyclopedia',
    component: () => import('../views/WeaponsEncyclopedia.vue')
  },
  { 
    path: '/vehicleencyclopedia',
    name: 'vehicleencyclopedia',
    component: () => import('../views/VehicleEncyclopedia.vue')
  },
  { 
    path: '/equipmentessentials',
    name: 'equipmentessentials',
    component: () => import('../views/EquipmentEssentials.vue')
  },
  { 
    path: '/armoryessentials',
    name: 'armoryessentials',
    component: () => import('../views/ArmoryEssentials.vue')
  },
  { 
    path: '/proba',
    name: 'proba',
    component: () => import('../views/Proba.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
