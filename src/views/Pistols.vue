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
        <br /><br />
        Additionally, we will discuss important features such as barrel length, firing mechanisms, and ergonomic considerations. The choice of a pistol often depends on factors such as the intended application, operational environment, and personal preference. Understanding the operational principles and tactical advantages of each type of pistol is crucial for optimizing performance in the field.
        This guide aims to provide military personnel with the knowledge required to select and effectively use pistols in various operational contexts. By understanding the strengths and limitations of different pistol types, users can make informed decisions that enhance their effectiveness and safety during missions.
      </p>
      <div class="gallery-section">
        <a href="#" class="link-gallery">GALLERY</a>
        <div class="blue-line"></div>
        <h2 class="test-title">TEST</h2>
        <p class="test-description">
          The following test is designed to assess your understanding of pistols, including their various types and features as covered in the GALLERY section. This test will challenge you on different aspects of pistols, including their mechanisms, uses, and key characteristics. The test consists of multiple-choice questions related to the content provided, with three levels of difficulty: Easy, Medium, and Hard. Each question will test your knowledge based on the information discussed in the Pistols section. Correct answers will earn you points, while incorrect answers will result in a deduction of points. Review the material thoroughly to maximize your score. Difficulty levels are as follows: Easy covers fundamental aspects, Medium explores details of different types, and Hard requires a comprehensive understanding of operational principles and tactical advantages. The aim is to evaluate and reinforce your knowledge, ensuring effective application of information in real-world scenarios.
        </p>
        <div class="test-levels">
          <h3>Test Levels Breakdown:</h3>
          <ul>
            <li><strong>Easy:</strong> Basic questions covering fundamental aspects. Includes 10 questions with a 10-minute time limit.</li>
            <li><strong>Medium:</strong> Intermediate questions exploring details of different pistol types. Includes 15 questions with a 15-minute time limit.</li>
            <li><strong>Hard:</strong> Advanced questions requiring a comprehensive understanding of operational principles and tactical advantages. Includes 20 questions with a 20-minute time limit.</li>
          </ul>
        </div>
        <a href="#" class="link-start-test">START TEST</a> 
      </div>
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
    margin-top: 10px;
    padding: 0 3%;
    font-size: 1rem;
    line-height: 1.6;
    color: #676767; 
  }
  
  .gallery-section {
    position: relative;
    margin-top: 40px; 
    margin-bottom: 20px;
  }
  
  .link-gallery {
    display: inline-block;
    font-size: 1.5rem;
    color: #00adb5;
    text-decoration: none;
    margin-bottom: 10px;
  }
  
  .link-gallery:hover {
    background-color: #00adb5;
    color: white;
  }
  
  .blue-line {
    width: 94%;
    height: 2px;
    background-color: #00adb5;
    margin: 10px auto;
  }
  
  .test-title {
    font-size: 2rem;
    color: #676767; 
    margin-top: 30px;
    font-weight: bold;
  }
  
  .test-description {
    text-align: justify;
    margin-top: 10px;
    padding: 0 3%;
    font-size: 1rem;
    line-height: 1.6;
    color: #676767; 
  }
  
  .test-levels {
    margin-top: 20px; 
    text-align: left;
    padding: 0 3%;
  }
  
  .test-levels h3 {
    font-size: 1.25rem;
    color: #676767; 
    margin-bottom: 10px;
  }
  
  .test-levels ul {
    list-style-type: none; 
    padding-left: 0; 
    color: #676767; 
  }
  
  .test-levels li {
    margin-bottom: 10px;
  }
  
  .link-start-test {
    display: inline-block;
    font-size: 1.5rem;
    color: #00adb5;
    text-decoration: none;
    margin-top: 30px; 
    margin-bottom: 10px;
  }
  
  .link-start-test:hover {
    background-color: #00adb5;
    color: white;
  }
  </style>
  
  