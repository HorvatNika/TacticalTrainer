<template>
  <div class="profile">
    <div class="profile-title">
      <div class="rotated-text">PROFILE</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
};
</script>

<style scoped>
.profile {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/profilePozadina.jpg');
  background-size: cover;
  background-position: center;
  color: rgba(255, 255, 255, 0.85);
  font-family: 'mojFont', sans-serif;
  text-align: center;
  box-sizing: border-box;
}

.profile-title {
  position: absolute;
  font-size: 15rem; 
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  transform: rotate(-90deg);
  transform-origin: bottom left; 
  top: 50%; 
  left: 35%; 
  transform: translate(-50%, -50%) rotate(-90deg); 
  opacity: 40%;
}

.profile-title::first-letter {
  color: #00adb5; 
}

.rotated-text {
  display: inline-block;
}
</style>
