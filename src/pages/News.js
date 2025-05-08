import React from 'react';

function News() {
  return (
    <div className="news-page">
      <div className="content-container">
      <h1 className="title">Updates & News</h1>

      <div className="news-post">
        <h2>🚀 Just Launched: Income Classification Project</h2>
        <p>
          I just published a full SparkML pipeline using U.S. census data to predict income brackets.
          It showcases my ability to build scalable data flows and apply machine learning to real-world datasets.
        </p>
        <a
          href="https://github.com/zayvianas/Income-Classification-Using-SparkML-A-Predictive-Analysis-of-Census-Data"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>

      <div className="news-post">
        <h2>📚 Graduation is Coming!</h2>
        <p>
          I'm wrapping up my Master's in AI & Business Analytics and actively seeking roles in project coordination,
          data analytics, or technical solutions delivery. Let’s connect!
        </p>
        <a
      href="https://www.youtube.com/live/z6PqvOrZdTU"
      target="_blank"
      rel="noopener noreferrer"
      >
       Watch My Graduation Live →
    </a>
      </div>
    </div>
    </div>  
  );
}

export default News;
