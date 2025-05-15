
import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';





function Resume() {
  const rawSkills = [
    { name: 'Python', level: 76 },
    { name: 'SQL', level: 56 },
    { name: 'JavaScript', level: 60 }
  ];
  
  const [animatedSkills, setAnimatedSkills] = useState(
    rawSkills.map(skill => ({ ...skill, level: 0 }))
  );
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedSkills(prev =>
        prev.map((skill, idx) => {
          const target = rawSkills[idx].level;
          if (skill.level < target) {
            return { ...skill, level: skill.level + 2 };
          }
          return skill;
        })
      );
    }, 20);
  
    return () => clearInterval(interval);
  }, []);

const [chartColors, setChartColors] = useState([]);

useEffect(() => {
  const updateColors = () => {
    const styles = getComputedStyle(document.body);
    setChartColors([
      styles.getPropertyValue('--chart-color-0').trim(),
      styles.getPropertyValue('--chart-color-1').trim(),
      styles.getPropertyValue('--chart-color-2').trim()
    ]);
  };

  
  updateColors();

  
  const observer = new MutationObserver(updateColors);
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  return () => observer.disconnect();
}, []);


  
  
  const skillGroups = [
    {
      name: 'Full-Stack Tech',
      value: 4,
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Django', 'Flask', 'APIs', 'Data Integration']
    },
    {
      name: 'Data Tech',
      value: 4,
      skills: ['MySQL', 'SQLite','Data Modeling','Data Cleaning','EDA','ETL Pipelines', 'Cloud Platforms (AWS, Azure)']
    },
    {
      name: ' Tools',
      value: 4,
      skills: ['Tableau', 'Power BI', 'Git', 'Slack', 'Microsoft 365 Suite', 'Jira', 'Snowflake','Databricks']
    }
  ];
  
  
  
  
  return (
    <div className="resume-page">
      <div className="content-container">
      
  <h1 className="title"> Resume</h1>
  <p className="resume-subtitle">Technical Skills • Projects • Experience</p>

  <div className="resume-button-group">
  <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
    Download My Resume →
  </a>

  <a href="/transcript.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
    Download My Transcript →
  </a>

      </div>

      {/* Summary */}
      <div className="resume-section"></div>
  
    <h2 className="section-title">Professional Summary</h2>
    
      
      
        <p>
          I’m a multi-disciplinary technologist open to roles in project management, data analysis,
          machine learning, and full-stack development. With a Master's in AI & Business Analytics and hands-on
          experience across data pipelines, web applications, and stakeholder coordination, I bring a well-rounded,
          adaptable approach to problem-solving. I'm passionate about continuous learning, thrive in collaborative
          environments, and often describe myself as a “technical unicorn.”
        </p>
      </div>
    

      {/* Education */}
      <div className="resume-section">
  <h2 className="section-title">Education</h2>

  <div className="edu-entry">
    <h3 className="edu-school">University of South Florida</h3>
    <p className="edu-degree">M.Sc. in AI & Business Analytics <span className="edu-date">— May 2025</span></p>
    <p className="edu-notes"><strong>GPA:</strong> 3.81</p>
    <p className="edu-notes"><strong>Relevant Coursework:</strong> ML, PM, AWS, Data Warehousing</p>
  </div>

  <div className="edu-entry">
    <h3 className="edu-school">University of South Florida</h3>
    <p className="edu-degree">B.Sc. in Information Science Technology <span className="edu-date">— Dec 2020</span></p>
    <p className="edu-notes"><strong>GPA:</strong> 3.49</p>
    <p className="edu-notes"><strong>Relevant Coursework:</strong> Web Design, OOP, Data Science</p>
  </div>
</div>


      {/* Projects */}
      <div className="resume-section">
  <h2 className="section-title">Featured Projects</h2>

  <div className="project-entry">
    <h3 className="project-title">💡 Income Classification (SparkML)</h3>
    <p>Built a distributed ML pipeline using PySpark to predict U.S. income levels.</p>
    <a className="project-link" href="https://github.com/zayvianas/Income-Classification-Using-SparkML-A-Predictive-Analysis-of-Census-Data" target="_blank" rel="noreferrer">
      View on GitHub →
    </a>
  </div>

  <div className="project-entry">
    <h3 className="project-title">🌱 PlantTracker App</h3>
    <p>Flask + SQLite app that helps farmers manage and visualize plant inventories.</p>
  </div>

  <div className="project-entry">
    <h3 className="project-title">📊 COVID GDP Dashboard</h3>
    <p>Tableau dashboard visualizing global GDP before, during, and after COVID.</p>
  </div>
</div>

      {/* Skills */}
      <div className="resume-section">
      <h2 className='section-title'>Programming Languages</h2>
      <br/>
      <br/>
        {animatedSkills.map((skill, i) => (
        <div key={i} className="progress-bar-container">
          <span className="progress-label">{skill.name}</span>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${skill.level}%` }} />
          </div>
        </div>
        ))}
      </div>





<div className="resume-section">
<h2 className='section-title'>Other Technical & Professional Skills</h2>
<div className="centered-chart">
<PieChart width={500} height={400}>
  <Pie
    data={skillGroups}
    dataKey="value"
    cx="50%"
    cy="50%"
    innerRadius={80}
    outerRadius={120}
    label={false}
    stroke="none"
    isAnimationActive={true}
    animationBegin={0}
    animationDuration={1200}
    animationEasing="ease-out"
    startAngle={90}
    endAngle={-270}
  >
    {skillGroups.map((entry, index) => (
  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
))}

  </Pie>
  <Tooltip
    formatter={(_, __, { payload }) => payload.skills.join(', ')}
    contentStyle={{
      backgroundColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--bg')
        .trim(),
      color: getComputedStyle(document.documentElement)
        .getPropertyValue('--text')
        .trim(),
      borderRadius: '8px',
      border: `1px solid ${getComputedStyle(document.documentElement)
        .getPropertyValue('--accent')
        .trim()}`,
      fontSize: '0.9rem',
      padding: '10px'
    }}
    itemStyle={{
      color: getComputedStyle(document.documentElement)
        .getPropertyValue('--text')
        .trim()
    }}
  />
  <Legend />
</PieChart>



</div>
<h3 className='section-title'>Core Competencies</h3>
  <p>Effective Communication, Leadership, Problem-Solving, Attention to Detail, Adaptability, Agile Mindset</p>

</div>
  



     {/* Work Experience */} 
     <div className="resume-section">
  <h2 className="section-title">Work Experience</h2>

  <div className="exp-entry">
    <h3 className="exp-role">System Integration Admin – Miter Brands <span className="exp-date">Aug 2022 – Present · Tampa, FL</span></h3>
    <ul className="exp-bullets">
      <li>Designed and maintained SharePoint sites for 100+ users, reducing task time by 21%.</li>
      <li>Created Tableau dashboards that improved operational efficiency by 30%.</li>
      <li>Trained 50+ employees, boosting adoption and engagement with enterprise tools.</li>
    </ul>
  </div>

  <div className="exp-entry">
    <h3 className="exp-role">Data Analyst Intern – Value Tech <span className="exp-date">Nov 2023 – Jan 2024 · Tampa, FL</span></h3>
    <ul className="exp-bullets">
      <li>Managed HUD housing projects and conducted property evaluations to ensure 100% compliance.</li>
      <li>Built Tableau dashboards and Excel-integrated reports to reduce delivery time by 20%.</li>
    </ul>
  </div>

  <div className="exp-entry">
    <h3 className="exp-role">Software Development Intern – Dev10 <span className="exp-date">Mar 2023 – Jul 2023 · Tampa, FL</span></h3>
    <ul className="exp-bullets">
      <li>Contributed to full-stack projects using Java, Spring Boot, and JavaScript.</li>
      <li>Helped develop and scale a web application as part of a collaborative team.</li>
    </ul>
  </div>

  <div className="exp-entry">
    <h3 className="exp-role">Rotational Analyst Intern – InvestCloud <span className="exp-date">Nov 2020 – Jul 2021 · Tampa, FL</span></h3>
    <ul className="exp-bullets">
      <li>Conducted UAT and regression testing for financial apps, reducing defects by 20%.</li>
      <li>Built web interfaces and resolved 500+ support tickets with a 93% SLA resolution rate.</li>
    </ul>
  </div>
</div>


    </div>
    
  );
}

export default Resume;
