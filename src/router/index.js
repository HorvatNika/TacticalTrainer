import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import db from 'src/main'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Authentification/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Authentification/Signup.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Menu.vue'),
    meta: {
      requiresAuth: true
    }
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
    path: '/test/:testId/',
    name: 'test',
    component: () => import('../views/TestsAndScore/Test.vue')
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
    component: () => import('../views/TestsAndScore/ScoreRank.vue')
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
  {
    path: '/pistolslearnmore',
    name: 'pistolslearnmore',
    component: () => import('../views/PistolsLearnMore.vue')
  },
  {
    path: '/rifleslearnmore',
    name: 'rifleslearnmore',
    component: () => import('../views/RiflesLearnMore.vue')
  },
  {
    path: '/sniperslearnmore',
    name: 'sniperslearnmore',
    component: () => import('../views/SnipersLearnMore.vue')
  },
  {
    path: '/vehicleslearnmore',
    name: 'vehicleslearnmore',
    component: () => import('../views/VehiclesLearnMore.vue')
  },
  {
    path: '/gearlearnmore',
    name: 'gearlearnmore',
    component: () => import('../views/GearLearnMore.vue')
  },
  {
    path: '/ammunitionlearnmore',
    name: 'ammunitionlearnmore',
    component: () => import('../views/AmmunitionLearnMore.vue')
  },
  {
    path: '/disassemblylearnmore',
    name: 'disassemblylearnmore',
    component: () => import('../views/DisassemblyLearnMore.vue')
  },
  {
    path: '/testscorerank',
    name: 'testscorerank',
    component: () => import('../views/TestsAndScore/TestScoreRank.vue')
  },
  {
    path: '/profileedit',
    name: 'profileedit',
    component: () => import('../views/ProfileEdit.vue')
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: () => import('../views/Admin/AdminPage.vue'),
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/admin/users/:userId/schedule',
    name: 'AdminUserSchedulePage',
    component: () => import('../views/Admin/AdminUserSchedulePage.vue')
  },
  {
    path: '/admin/tests/create',
    name: 'AdminTestCreatePage',
    component: () => import('../views/Admin/AdminCreateTestPage.vue')
  },
  {
    path: '/admin/test/:id/edit',
    name: 'AdminTestEditPage',
    component: () => import('../views/Admin/AdminEditTestPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = async () => {
  return new Promise(async (resolve, reject) => {
    const removeListener = onAuthStateChanged(getAuth(), async (user) => {
      removeListener();
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          resolve({ ...user, isAdmin: userData.isAdmin || false });
        } else {
          resolve({ ...user, isAdmin: false });
        }
      } else {
        resolve(null);
      }
    }, reject);
  });
};


router.beforeEach(async (to, from, next) => {
  const currentUser = await getCurrentUser();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (currentUser) {
      if (to.meta.isAdmin && !currentUser.isAdmin) {
        next('/');
      } else {
        next();
      }
    } else {
      next('/');
    }
  }
  else if (currentUser && (to.path === '/' || to.path === '/signup' || to.path === 'login'))
    next('/menu');
  else {
    next();
  }
});

export default router