<template>
  <div class="pistols-page">
    <h1>PISTOLS</h1>
    <p class="description">
      Welcome to the Pistols page. This section is dedicated to providing in-depth information on various types of pistols, focusing on their critical roles in military and tactical scenarios.
      Pistols are compact, hand-held firearms designed for rapid deployment and ease of use in close-quarters combat. They are categorized into various types, each with distinct features and applications. Key categories include semi-automatic pistols, revolvers, and machine pistols. Understanding these categories is vital for military personnel as each type offers different advantages in different tactical situations.
      Semi-Automatic Pistols: These pistols are renowned for their ability to fire multiple rounds with a single pull of the trigger. They use the energy from the fired round to chamber the next one, allowing for faster follow-up shots. Semi-automatic pistols are favored for their reliability, higher magazine capacities, and ease of reloading. They are commonly used in both military and law enforcement settings.
      Revolvers: Revolvers are known for their rotating cylinder that holds ammunition. They are typically more robust and have fewer moving parts compared to semi-automatic pistols, which can enhance their reliability. However, they generally have a lower magazine capacity and require manual operation to reload. Revolvers are valued for their durability and simplicity.
      Machine Pistols: These are fully-automatic pistols capable of firing continuously as long as the trigger is held. They offer high firepower and are effective in close-quarters combat. Machine pistols are less common due to their recoil and ammunition consumption but are useful in specialized tactical scenarios.
    </p>
    <router-link to="/pistolslearnmore" class="learn-more">LEARN MORE</router-link>
  </div>
</template>

<style scoped>
.pistols-page {
  padding: 20px;
  font-family: 'mojFont', sans-serif;
  text-align: center;
}

.pistols-page h1 {
  font-size: 2.5rem;
  color: #676767;
}

.pistols-page h1::after {
  content: '';
  display: block;
  width: 30%;
  height: 5px;
  background-color: #00adb5;
  margin: 5px auto;
  border-radius: 30px;
}

.description {
  text-align: justify;
  margin-top: 50px;
  padding: 0 3%;
  font-size: 1rem;
  line-height: 1.6;
  color: #676767; 
  margin-bottom: 40px; 
}

.learn-more {
  display: inline;
  font-size: 1.7rem;
  color: #00adb5;
  text-decoration: none;
}

.learn-more:hover {
  color: #007a8d; 
}
</style>
