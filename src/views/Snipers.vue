<template>
    <div class="sniper-page">
      <h1>SNIPERS</h1>
      <p class="description">
        Welcome to the Sniper Rifles page. This section is dedicated to providing in-depth information on sniper rifles, focusing on their critical roles in military and tactical scenarios.
        Sniper rifles are high-precision firearms designed for long-range shooting. They are used in military operations, law enforcement, and hunting. Sniper rifles are known for their accuracy, long-range capabilities, and advanced optics.
        Bolt-Action Sniper Rifles: These rifles are renowned for their exceptional accuracy and reliability. The shooter manually operates the bolt to load and eject cartridges, which contributes to their precision. Bolt-action sniper rifles are often used in military and tactical situations where precision is crucial.
        Semi-Automatic Sniper Rifles: These rifles offer quicker follow-up shots compared to bolt-action rifles. They are used in scenarios where rapid engagement at long ranges is required. Semi-automatic sniper rifles balance accuracy with rate of fire.
        Designated Marksman Rifles: While not strictly sniper rifles, designated marksman rifles bridge the gap between standard rifles and sniper rifles. They offer enhanced accuracy and range compared to standard rifles, making them suitable for long-range engagements.
      </p>
      <router-link to="/sniperslearnmore" class="learn-more">LEARN MORE</router-link>
    </div>
  </template>
  
  <style scoped>
  .sniper-page {
    padding: 20px;
    font-family: 'mojFont', sans-serif;
    text-align: center;
  }
  
  .sniper-page h1 {
    font-size: 2.5rem;
    color: #676767;
  }
  
  .sniper-page h1::after {
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
    margin-top: 20px; 
  }
  
  .learn-more:hover {
    color: #007c8a89; 
  }
  </style>
  