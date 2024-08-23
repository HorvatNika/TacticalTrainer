<template>
    <div class="tactical-gear-overview-page">
      <h1>TACTICAL GEAR OVERVIEW</h1>
      <p class="description">
        Welcome to the Tactical Gear Overview page. This section provides an in-depth look at various types of tactical gear essential for modern military operations. Tactical gear includes equipment designed to enhance the effectiveness, safety, and survivability of personnel in diverse operational environments.
        Tactical gear encompasses a wide range of items, including body armor, helmets, load-bearing equipment, and communication devices. Each category of gear serves a specific purpose and is tailored to meet the demands of different missions and combat scenarios.
        Body Armor: Body armor is designed to protect personnel from ballistic threats and shrapnel. It comes in various levels of protection, ranging from soft armor vests to hard plate carriers. The choice of body armor depends on the threat level and mission requirements, providing crucial protection in hostile environments.
        Helmets: Tactical helmets offer protection for the head against impact, ballistic threats, and fragmentation. They are often equipped with additional features such as night vision mounts and communication systems. Helmets are vital for ensuring the safety and operational capability of personnel in combat situations.
        Load-Bearing Equipment: Load-bearing equipment, including tactical vests and belts, is designed to carry essential gear and ammunition. It allows for efficient organization and quick access to equipment while maintaining mobility. This gear is crucial for sustaining operations and ensuring that personnel have the necessary tools readily available.
        Communication Devices: Effective communication is critical for coordinating operations and ensuring situational awareness. Tactical communication devices, such as radios and headsets, facilitate real-time communication between team members and command units. These devices are essential for successful mission execution and maintaining operational cohesion.
      </p>
      <router-link to="gearlearnmore" class="learn-more">LEARN MORE</router-link>
    </div>
  </template>
  
  <style scoped>
  .tactical-gear-overview-page {
    padding: 20px;
    font-family: 'mojFont', sans-serif;
    text-align: center;
  }
  
  .tactical-gear-overview-page h1 {
    font-size: 2.5rem;
    color: #676767;
  }
  
  .tactical-gear-overview-page h1::after {
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
  