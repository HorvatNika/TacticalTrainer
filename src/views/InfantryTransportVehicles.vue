<template>
    <div class="infantry-transport-vehicles-page">
      <h1>INFANTRY TRANSPORT VEHICLES</h1>
      <p class="description">
        Welcome to the Infantry Transport Vehicles page. This section is dedicated to exploring the various types of vehicles used to transport infantry troops and their equipment. These vehicles are crucial for enhancing operational mobility, protection, and logistical support in various military environments.
        Infantry transport vehicles come in several forms, each designed to meet specific operational needs. Key categories include armored personnel carriers (APCs), infantry fighting vehicles (IFVs), and military trucks. Each category has its own features and advantages, tailored to different battlefield scenarios.
        Armored Personnel Carriers (APCs): APCs are designed to transport infantry while providing protection from small arms fire and explosive threats. They feature armor plating and can be equipped with additional protective measures such as mine-resistant capabilities. APCs are essential for ensuring the safety of troops during movement through hostile areas.
        Infantry Fighting Vehicles (IFVs): IFVs are versatile vehicles that not only transport infantry but also provide combat support with their integrated weapon systems. They are armed with autocannons, machine guns, and sometimes missiles, allowing them to engage enemy forces while supporting dismounted troops. IFVs enhance both offensive and defensive capabilities on the battlefield.
        Military Trucks: These vehicles are primarily used for logistical purposes, including transporting supplies, equipment, and personnel. They vary in size and capacity, from light tactical trucks to heavy-duty cargo vehicles. Military trucks are vital for maintaining supply lines and ensuring that infantry units are equipped and ready for operations.
      </p>
      <router-link to="/vehicleslearnmore" class="learn-more">LEARN MORE</router-link>
    </div>
  </template>
  
  <style scoped>
  .infantry-transport-vehicles-page {
    padding: 20px;
    font-family: 'mojFont', sans-serif;
    text-align: center;
  }
  
  .infantry-transport-vehicles-page h1 {
    font-size: 2.5rem;
    color: #676767;
  }
  
  .infantry-transport-vehicles-page h1::after {
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
  