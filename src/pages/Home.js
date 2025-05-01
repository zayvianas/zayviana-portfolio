import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <div className="home">
      <h1>
        <Typewriter
          words={[
            "Hi, I'm Zayviana.",
            "I'm a technical unicorn.",
            "I build web apps and data pipelines.",
            "I manage projects and write code."
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1000}
        />
      </h1>

      <div className="intro-bio">
        <h2>Zayviana Singletary</h2>
        <p>
          Master’s in AI & Business Analytics · Full-stack project builder · 
          Creative technologist with a heart for problem-solving.
        </p>
      </div>
      
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I’m Zayviana — a full-stack technical unicorn with a Master’s in AI & Business Analytics.
          I bridge data, code, and project management to build smart, scalable solutions. I’ve built
          data pipelines, predictive ML models, and full web apps. My sweet spot? Helping teams
          move from ideas to impact through both strategy and hands-on execution.
        </p>
      </div>
    </div>

    
  );
}

export default Home;
