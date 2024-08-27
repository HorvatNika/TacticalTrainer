<template>
    <div class="disassembly-page">
      <h1>DISASSEMBLY</h1>
      <p class="description">
        Welcome to the Disassembly page. This section provides detailed guidance on the disassembly process of various firearms and tactical gear. Understanding how to properly disassemble equipment is crucial for maintenance, cleaning, and troubleshooting.
        Disassembly involves separating the different components of a firearm or piece of tactical gear to perform routine maintenance or repairs. This process varies depending on the type of equipment and its design, but generally includes steps such as removing screws, pins, and other fasteners.
        Firearm Disassembly: Proper disassembly of firearms is essential for cleaning and maintenance. It typically involves removing the barrel, slide, recoil spring, and magazine. Each component must be handled with care to avoid damage. Regular disassembly and reassembly ensure the firearm operates reliably and safely.
        Tactical Gear Disassembly: For tactical gear such as vests and helmets, disassembly may involve removing accessories, padding, or other modular components. This allows for thorough cleaning and inspection. Understanding the assembly and disassembly of tactical gear ensures that all parts function correctly and are in good condition.
        Safety Precautions: Always follow safety protocols when disassembling firearms or tactical gear. Ensure that firearms are unloaded before beginning disassembly and use appropriate tools to avoid damage. For tactical gear, refer to manufacturer instructions to avoid compromising the integrity of the equipment.
      </p>
      <router-link to="/disassemblylearnmore" class="learn-more">LEARN MORE</router-link>
    </div>
  </template>
  
  <style scoped>
  .disassembly-page {
    padding: 20px;
    font-family: 'mojFont', sans-serif;
    text-align: center;
  }
  
  .disassembly-page h1 {
    font-size: 2.5rem;
    color: #676767;
  }
  
  .disassembly-page h1::after {
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
  