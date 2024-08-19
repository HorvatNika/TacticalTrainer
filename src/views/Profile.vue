<template>
  <div class="profile">
    <div class="overlay"></div>
    <h2 class="subtitle">PROFILE</h2>
    <div class="container">
      <div class="row">
        <div class="col-md"></div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="transparent-box"></div>
        </div>
        <div class="col-md"></div>
      </div>
    </div>

    <div class="bottom-title">
      <h1 class="title mb-0">
        <span class="blue">T</span>ACTICAL <span class="blue">T</span>RAINER
      </h1>
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
  background-image: url('@/assets/profilePozadina.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.85);
  font-family: 'mojFont', sans-serif;
}

.title {
  font-size: 3rem;
}

.blue {
  color: #00adb5;
}

.subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.transparent-box {
  background-color: rgba(0, 0, 0, 0.20);
  padding: 40px;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 400px;
  z-index: 2;
}

.bottom-title {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 50%;
  z-index: 2;
}
</style>
