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
    path: '/testpistols',
    name: 'testpistols',
    component: () => import('../views/TestPistols.vue')
  },
  { 
    path: '/infantry',
    name: 'infantry',
    component: () => import('../views/Infantry.vue')
  },
  { 
    path: '/pistols',
    name: 'pistols',
    component: () => import('../views/Pistols.vue')
  },
  { 
    path: '/scorerank',
    name: 'scorerank',
    component: () => import('../views/ScoreRank.vue')
  },
  { 
    path: '/rifles',
    name: 'rifles',
    component: () => import('../views/Rifles.vue')
  },
  { 
    path: '/snipers',
    name: 'snipers',
    component: () => import('../views/Snipers.vue')
  },
  { 
    path: '/infantrytransportvehicles',
    name: 'infantrytransportvehicles',
    component: () => import('../views/InfantryTransportVehicles.vue')
  },
  { 
    path: '/tacticalgearoverview',
    name: 'tacticalgearoverview',
    component: () => import('../views/TacticalGearOverview.vue')
  },
  { 
    path: '/disassembly',
    name: 'disassembly',
    component: () => import('../views/Disassembly.vue')
  },
  { 
    path: '/ammunition',
    name: 'ammunition',
    component: () => import('../views/Ammunition.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
