<template>
    <div class="rifles-page">
      <h1>RIFLES</h1>
      <p class="description">
        Welcome to the Rifles page. This section is dedicated to providing in-depth information on various types of rifles, focusing on their critical roles in military and tactical scenarios.
        Rifles are long-barreled firearms designed for precision shooting and are commonly used in military, law enforcement, and hunting applications. They are categorized into different types based on their design and intended use, including bolt-action rifles, semi-automatic rifles, and assault rifles.
        Bolt-Action Rifles: These rifles are known for their accuracy and reliability. The shooter manually operates the bolt to load and eject cartridges. Bolt-action rifles are favored for their precision and are often used in long-range shooting.
        Semi-Automatic Rifles: These rifles automatically chamber a new round after each shot, allowing for quicker follow-up shots compared to bolt-action rifles. They are commonly used in both military and civilian settings for various applications.
        Assault Rifles: These are designed for rapid, automatic fire and are commonly used in military combat situations. Assault rifles are versatile and can be used in various conditions, offering a balance between firepower and accuracy.
      </p>
      <router-link to="/rifleslearnmore" class="learn-more">LEARN MORE</router-link>
    </div>
  </template>
  
  <style scoped>
  .rifles-page {
    padding: 20px;
    font-family: 'mojFont', sans-serif;
    text-align: center;
  }
  
  .rifles-page h1 {
    font-size: 2.5rem;
    color: #676767;
  }
  
  .rifles-page h1::after {
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
  