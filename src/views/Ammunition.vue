<template>
    <div class="ammunition-page">
      <h1>AMMUNITION</h1>
      <p class="description">
        Welcome to the Ammunition page. This section offers a comprehensive overview of various types of ammunition used in firearms and tactical equipment. Understanding ammunition is essential for effective use and maintenance of firearms.
        Ammunition consists of the cartridge, which includes the case, primer, powder, and projectile. Different types of ammunition are designed for specific purposes and weapon systems, influencing their performance and effectiveness in different scenarios.
        Cartridge Types: Ammunition cartridges come in various calibers and types, including full metal jacket (FMJ), hollow point (HP), and armor-piercing (AP). Each type has unique characteristics and applications, from target shooting to self-defense and military operations.
        Ballistics: Understanding ballistics is crucial for accurate shooting and effective ammunition selection. Ballistics involves the study of the motion of projectiles, including internal ballistics (within the firearm), external ballistics (in flight), and terminal ballistics (upon impact).
        Ammunition Storage and Handling: Proper storage and handling of ammunition are vital for safety and performance. Ammunition should be stored in a cool, dry place and handled with care to prevent damage. Regular checks and proper maintenance ensure reliability and longevity.
      </p>
      <router-link to="/ammunitionlearnmore" class="learn-more">LEARN MORE</router-link>
    </div>
  </template>
  
  <style scoped>
  .ammunition-page {
    padding: 20px;
    font-family: 'mojFont', sans-serif;
    text-align: center;
  }
  
  .ammunition-page h1 {
    font-size: 2.5rem;
    color: #676767;
  }
  
  .ammunition-page h1::after {
    content: '';
    display: block;
    width: 30%;
    height: 5px;
    background-color: #007c8a64;
    margin: 5px auto;
    border-radius: 30px;
  }
  
  .description {
    text-align: justify;
    margin-top: 50px;
    padding: 0 3%;
    font-size: 1rem;
    line-height: 1.6;
    color: #7b7b7b; 
    margin-bottom: 40px; 
  }
  
  .learn-more {
    display: inline;
    font-size: 1.7rem;
    color: #007c8a64;
    text-decoration: none; 
  }
  
  .learn-more:hover {
    color: #007c8a89;
  }
  </style>
  