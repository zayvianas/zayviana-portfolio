import React from 'react';
import { FaPython,FaSlack,FaApple, FaNodeJs,FaDatabase,FaFigma,FaMicrosoft, FaHtml5,FaCss3Alt,FaJava,FaTerminal, FaReact, FaGithub, FaJira, FaAws} from "react-icons/fa";
import { IoLogoJavascript,IoIosBusiness } from "react-icons/io";
import { SiVercel,SiRender,SiNotion,SiRstudioide,SiExpress,SiXcode,SiJupyter,SiFlask,SiTableau ,SiCanva, SiDatabricks,SiApachespark,SiAnaconda} from "react-icons/si";
import { VscAzure,VscVscode,VscTerminalBash,VscTerminalPowershell } from "react-icons/vsc";
import { ImWindows } from "react-icons/im";
import { DiSqllite } from "react-icons/di";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "R", icon: <SiRstudioide /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Java", icon: <FaJava /> },
  { name: "React", icon: <FaReact /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Tableau", icon: <SiTableau /> },
  { name: "Git", icon: <FaGithub /> },
  { name: "Jira", icon: <FaJira /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Azure", icon: <VscAzure /> },
  { name: "Databricks", icon: <SiDatabricks /> },
  { name: "SparkML", icon: <SiApachespark /> },
  { name: "Terminal", icon: <FaTerminal /> },
  { name: "Anaconda", icon: <SiAnaconda /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "PowerBI", icon: <IoIosBusiness /> },
  { name: "Microsoft 365", icon: <FaMicrosoft /> },
  { name: "VSCode", icon: <VscVscode /> },
  { name: "Jupyter", icon: <SiJupyter /> },
  { name: "Bash", icon: <VscTerminalBash /> },
  { name: "Powershell", icon: <VscTerminalPowershell /> },
  { name: "Apple", icon: <FaApple /> },
  { name: "Windows", icon: <ImWindows /> },
  { name: "Xcode", icon: <SiXcode /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "SQL Lite", icon: <DiSqllite /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Slack", icon: <FaSlack /> },
  { name: "Notion", icon: <SiNotion /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Render", icon: <SiRender /> }
];

function SkillsGrid() {
    return (
      <div className="about-me">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-item">
              <span className="icon">{skill.icon}</span>
              <span className="label">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default SkillsGrid;
  
