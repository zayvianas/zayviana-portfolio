import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SkillsSection from '../components/SkillsGrid';


const graduationDate = new Date("2025-05-08T13:30:00"); 


function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = graduationDate - now;
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);
  

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
</div>
<div className="info-row">
  <div className="countdown-section">
  <h2 className="section-title"> Countdown to Graduation</h2>

    <div className="digital-countdown">
      <div className="count-unit">{timeLeft.days}<span>Days</span></div>
      <div className="colon">:</div>
      <div className="count-unit">{String(timeLeft.hours).padStart(2, '0')}<span>Hrs</span></div>
      <div className="colon">:</div>
      <div className="count-unit">{String(timeLeft.minutes).padStart(2, '0')}<span>Min</span></div>
      <div className="colon">:</div>
      <div className="count-unit">{String(timeLeft.seconds).padStart(2, '0')}<span>Sec</span></div>
    </div>
    <h2 className="section-title"> Watch Me Graduate</h2>
    <br/>
  <a
    href="https://www.youtube.com/live/z6PqvOrZdTU"
    target="_blank"
    rel="noopener noreferrer"
    className="grad-watch-btn"
  >
    Watch Here 
  </a>
  </div>
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
