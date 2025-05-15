import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SkillsSection from '../components/SkillsGrid';

 


function Home() {
  

  return (
    <div className="home">
      {/* Hero Section */}
     
        <div className="typewriter-box">
          <h1>
            <Typewriter
              words={[
                "Hi, I'm Zayviana.",
                "I'm a technical unicorn.",
                "I develop web apps and data pipelines.",
                "I manage projects and write code."
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={300}
            />
          </h1>
        </div>
      

      {/* Main Content */}
      <div className="content-container">
        <div className="intro-bio">
        <h2 className="section-title">Zayviana Singletary</h2>
          <p className="phonetic">(Zay·Vee·On·Nuh)</p>
          <p>
            Master’s in AI & Business Analytics · Full-stack project builder · 
            Creative technologist with a heart for problem-solving.
          </p>

          <div className="contact-info">
  <p className="contact-line">📍 Tampa, FL</p>
  <p className="contact-line">📧 zayvianaa@gmail.com</p>
  <br/>
</div>


        </div>

        <div className="about-me">
          <h2 className="section-title">A Little About Me</h2>
          <p className="about-blurb">
            Just your local beach bum 🌊 with a love for good food 🍜, retail therapy 🛍️, and spontaneous adventures ✈️.
            I'm passionate about continuous learning, creative expression, and building meaningful things — whether it's apps,
            outfits, or unforgettable memories. Curious, crafty, and a little caffeinated ☕ — that's me.
          </p>
        </div>

        <SkillsSection />

      </div>
    </div>
  );
}

export default Home;
