<template>
    <div class="pistols-page">
      <h1>PISTOLS</h1>
      <div class="gif-container">
        <img src="@/assets/gifMainPistols.gif" alt="Pistols GIF" class="pistols-gif" />
      </div>
      <p class="description">
        Welcome to the Pistols page. This section is dedicated to providing in-depth information on various types of pistols, focusing on their critical roles in military and tactical scenarios.
        
        Pistols are compact, hand-held firearms designed for rapid deployment and ease of use in close-quarters combat. They are categorized into various types, each with distinct features and applications. Key categories include semi-automatic pistols, revolvers, and machine pistols. Understanding these categories is vital for military personnel as each type offers different advantages in different tactical situations.
        
        Semi-Automatic Pistols: These pistols are renowned for their ability to fire multiple rounds with a single pull of the trigger. They use the energy from the fired round to chamber the next one, allowing for faster follow-up shots. Semi-automatic pistols are favored for their reliability, higher magazine capacities, and ease of reloading. They are commonly used in both military and law enforcement settings.
  
        Revolvers: Revolvers are known for their rotating cylinder that holds ammunition. They are typically more robust and have fewer moving parts compared to semi-automatic pistols, which can enhance their reliability. However, they generally have a lower magazine capacity and require manual operation to reload. Revolvers are valued for their durability and simplicity.
  
        Machine Pistols: These are fully-automatic pistols capable of firing continuously as long as the trigger is held. They offer high firepower and are effective in close-quarters combat. Machine pistols are less common due to their recoil and ammunition consumption but are useful in specialized tactical scenarios.
        <br /> <br />
        Additionally, we will discuss important features such as barrel length, firing mechanisms, and ergonomic considerations. The choice of a pistol often depends on factors such as the intended application, operational environment, and personal preference. Understanding the operational principles and tactical advantages of each type of pistol is crucial for optimizing performance in the field.
  
        This guide aims to provide military personnel with the knowledge required to select and effectively use pistols in various operational contexts. By understanding the strengths and limitations of different pistol types, users can make informed decisions that enhance their effectiveness and safety during missions.
      </p>
      <div class="gallery-section">
        <a href="#" class="link-gallery">GALLERY</a>
        <div class="blue-line"></div>
        <h2 class="test-title">TEST</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pistols'
  };
  </script>
  
  <style scoped>
  .pistols-page {
    padding: 20px;
    font-family: 'mojFont', sans-serif;
    text-align: center;
  }
  
  .pistols-page h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #676767;
  }
  
  .pistols-page h1::after {
    content: '';
    display: block;
    width: 30%;
    height: 5px;
    background-color: #00adb5;
    margin: 10px auto;
    border-radius: 30px;
  }
  
  .gif-container {
    margin-top: 10px;
  }
  
  .pistols-gif {
    width: 80%;
    max-width: 600px;
    height: auto;
  }
  
  .description {
    text-align: justify;
    margin-top: 15px; /* Reduced space between GIF and description */
    padding: 0 3%;
    font-size: 1rem;
    line-height: 1.6;
    color: #676767;
  }
  
  .gallery-section {
    position: relative;
    margin-top: 15px; /* Reduced space between description and gallery section */
  }
  
  .link-gallery {
    display: inline-block;
    font-size: 1.5rem;
    color: #00adb5;
    text-decoration: none;
    margin-bottom: 10px;
  }
  
  .blue-line {
    width: 90%;
    height: 2px;
    background-color: #00adb5;
    margin: 10px auto;
  }
  
  .test-title {
    font-size: 1.5rem;
    color: #676767;
    margin-top: 10px;
    font-weight: bold;
  }
  </style>
  