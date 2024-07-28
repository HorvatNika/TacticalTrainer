<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Prijava</router-link> |
    <router-link to="/signup">Registracija</router-link> |
    <router-link to="/menu">Menu</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/schedule">Schedule</router-link> |
    <router-link to="/weaponsencyclopedia">Weapons Encyclopedia</router-link> |
    <router-link to="/vehicleencyclopedia">Vehicle Encyclopedia</router-link> |
    <router-link to="/equipmentessentials">Equipment Essentials</router-link> |
    <router-link to="/armoryessentials">Armory Essentials</router-link> |
    <router-link to="/proba">Proba</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@font-face {
  font-family: 'mojFont';
  src: url('@/assets/font/mojFont.ttf') format('truetype'); 
  font-weight: 400; 
  font-style: normal; 
}

@font-face {
  font-family: 'drugiFont';
  src: url('@/assets/font/drugiFont.ttf') format('truetype'); 
  font-weight: 400; 
  font-style: normal; 
}

body {
  font-family: 'mojFont', sans-serif; 
}

#app {
  font-family: 'drugiFont', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
